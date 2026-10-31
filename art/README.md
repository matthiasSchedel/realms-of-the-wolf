# Frostmark art

Original images generated for Frostmark. The source of truth is the `frostmark-art` repository: prompts, style
reference, raw renders, the processing pipeline and the full manifest (`assets.json`) live there.

These WebP files are a copy of its `dist/` folder. To refresh them and the typed manifest
(`src/assets/artManifest.ts`), run `node scripts/import-art.mjs ../frostmark-art`.
Load images in code through `src/assets/artPack.ts` (`artUrl`, `preloadArt`, `loadTexture`, `artSlice`).

## Assets added or replaced by the art-plan U6 pass

Generated with `gpt-image-2-vip` against style frame A; prompts and raws in `frostmark-art` (`tools/jobs.py`).

- `portraits/{hg,rb}-*.webp` (replaced, 256 px): faceted toy busts, one silhouette per unit; selection panel, 76 px.
- `portraits/{hg,rb}-*-thumb.webp` (new, 128 px): face crop of the same render; train buttons, 46 px
  (`paint()` in `src/ui/artIds.ts` picks it for `.thumb` nodes).
- `textures/tex-snow.webp`, `tex-ice.webp`, `tex-ember-seam.webp` (replaced, 512 px, tileable): calmer snow
  drifts, glazed ice over a teal bed, mostly dark seam crust with sparse veins.
- `textures/tex-cliff.webp` (new, 512 px, tileable): stacked slate slabs with snow shelves, for cliff faces.
- `scene/horizon-strip.webp` (new, 2048x512, wraps horizontally): blue-hour mountain band for the sky dome.
- `scene/mist-card.webp` (new, 512 px, alpha): soft fog-card puff, flat pale tint.
- `scene/needle-sheet.webp` (new, 512 px, 4x4 atlas of 128 px cells): rows are needles, snow clumps, snowflakes,
  bark chips.
- `scene/pine-far.webp` (new, 512 px, alpha): far-distance pine billboard.
- `icons/cmd-confirm.webp`, `icons/cmd-cancel-place.webp` (new, 128 px): placement confirm and cancel.
- `icons/{hg,rb}-*.webp` buildings (replaced, 192 px, alpha): drawn from the 3D models (`wave/models` studio
  lineup as a second reference), so the build menu shows the building that gets placed.
