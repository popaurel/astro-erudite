#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

IM_CMD="$(command -v magick || true)"
if [[ -z "$IM_CMD" ]]; then
  IM_CMD="$(command -v convert || true)"
fi

if [[ -z "$IM_CMD" ]]; then
  echo "[imagemagick-optimize] ImageMagick not found (neither 'magick' nor 'convert'). Skipping image preprocessing."
  exit 0
fi

echo "[imagemagick-optimize] Starting image preprocessing..."

# 1) Optimize author avatar in place to 128x128
AVATAR_PATH="$ROOT_DIR/public/static/aurel-avatar.jpg"
if [[ -f "$AVATAR_PATH" ]]; then
  echo "[imagemagick-optimize] Optimizing avatar: $AVATAR_PATH"
  "$IM_CMD" "$AVATAR_PATH" \
    -auto-orient \
    -resize 128x128^ \
    -gravity center -extent 128x128 \
    -strip -quality 85 \
    "$AVATAR_PATH"
else
  echo "[imagemagick-optimize] Avatar not found at $AVATAR_PATH, skipping."
fi

# 2) Normalize blog banners to 1200x630 in place
shopt -s nullglob
for banner in "$ROOT_DIR"/src/content/blog/*/banner.*; do
  case "${banner##*.}" in
    jpg|jpeg|png|webp)
      echo "[imagemagick-optimize] Ensuring 1200x630: $banner"
      "$IM_CMD" "$banner" \
        -auto-orient \
        -resize 1200x630^ \
        -gravity center -extent 1200x630 \
        -strip -quality 85 \
        "$banner"
      ;;
    *)
      echo "[imagemagick-optimize] Skipping unsupported banner format: $banner"
      ;;
  esac
done

echo "[imagemagick-optimize] Done."


