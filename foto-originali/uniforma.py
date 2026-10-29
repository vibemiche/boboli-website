"""Uso: python3 uniforma.py originale.jpg ../web/src/assets/<slot>.jpg

Uniforma le foto: bilanciamento del bianco parziale verso un neutro caldo comune,
leggera curva a S, neri verso l'inchiostro del sito e alte luci verso il crema."""
import sys, numpy as np
from PIL import Image, ImageCms
import io

INK = np.array([0x20, 0x1e, 0x1d]) / 255
CREAM = np.array([0xf5, 0xea, 0xd8]) / 255
TARGET = np.array([1.75, 1.0, 0.62])   # rapporti R/G e B/G (lineari) del neutro caldo comune
CAP = (0.9, 1.12)                       # correzione massima per canale: la luce del locale resta

def to_lin(c): return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
def to_srgb(c): return np.where(c <= 0.0031308, c * 12.92, 1.055 * np.clip(c, 0, None) ** (1 / 2.4) - 0.055)

def grade(src, dst, strength=0.6, quality=82):
    im = Image.open(src)
    icc = im.info.get('icc_profile')
    a = np.asarray(im.convert('RGB'), dtype=np.float64) / 255
    lin = to_lin(a)
    lum = 0.2126 * lin[..., 0] + 0.7152 * lin[..., 1] + 0.0722 * lin[..., 2]
    # media sui mezzitoni: niente finestre bruciate né ombre chiuse
    m = (lum > 0.03) & (lum < 0.7)
    mean = lin[m].mean(axis=0)
    ratio = mean / mean[1]
    gains = np.clip((TARGET / ratio) ** strength, *CAP)
    gains /= (0.2126 * gains[0] + 0.7152 * gains[1] + 0.0722 * gains[2])  # conserva la luminosità
    lin = np.clip(lin * gains, 0, 1)
    c = to_srgb(lin)
    # curva a S morbida
    s = 0.07
    c = c - s * np.sin(2 * np.pi * c) / (2 * np.pi)
    # neri verso l'inchiostro, alte luci verso il crema (molto leggeri)
    c = INK * 0.55 + c * (1 - INK * 0.55)          # nero puro → circa metà dell'inchiostro
    hl = np.clip((c.mean(axis=-1, keepdims=True) - 0.75) / 0.25, 0, 1) ** 2
    c = c * (1 - 0.08 * hl) + CREAM * 0.08 * hl * (c.mean(axis=-1, keepdims=True))
    out = Image.fromarray((np.clip(c, 0, 1) * 255 + 0.5).astype(np.uint8))
    out.save(dst, quality=quality, optimize=True, progressive=True, subsampling='4:2:0', icc_profile=icc)
    return ratio, gains

if __name__ == '__main__':
    strength = float(sys.argv[3]) if len(sys.argv) > 3 else 0.6
    r, g = grade(sys.argv[1], sys.argv[2], strength)
    print(sys.argv[1].rsplit('/', 1)[-1], 'ratio', r.round(3), 'gains', g.round(3))
