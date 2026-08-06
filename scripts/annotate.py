"""Draw numbered callout markers on a screenshot.

Markers are additive: they sit on top of the capture and hide nothing.
See STYLE_GUIDE.md section 8. Usage:

    python scripts/annotate.py <src> <dst> x,y x,y ...

Numbers are assigned in the order the coordinates are given, which must
match the order of the numbered steps in the page text.
"""
import sys
from PIL import Image, ImageDraw, ImageFont

ORANGE = (252, 95, 30)
WHITE = (255, 255, 255)
R = 17

def font(size):
    for p in ("C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/segoeuib.ttf"):
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()

def annotate(src, dst, points, start=1):
    im = Image.open(src).convert("RGB")
    dr = ImageDraw.Draw(im)
    f = font(20)
    for i, (x, y) in enumerate(points, start):
        dr.ellipse([x - R - 2, y - R - 2, x + R + 2, y + R + 2], fill=WHITE)
        dr.ellipse([x - R, y - R, x + R, y + R], fill=ORANGE)
        t = str(i)
        bb = dr.textbbox((0, 0), t, font=f)
        dr.text((x - (bb[2] - bb[0]) / 2 - bb[0], y - (bb[3] - bb[1]) / 2 - bb[1]),
                t, font=f, fill=WHITE)
    im.save(dst)
    print(f"{dst}: {len(points)} markers at {points}")

if __name__ == "__main__":
    args = sys.argv[1:]
    start = 1
    if args and args[0].startswith("--start="):
        start = int(args.pop(0).split("=", 1)[1])
    src, dst = args[0], args[1]
    pts = [tuple(int(v) for v in a.split(",")) for a in args[2:]]
    annotate(src, dst, pts, start)
