# Frostmark art

Original images generated for Frostmark. The source of truth is the `frostmark-art` repository: prompts, style
reference, raw renders, the processing pipeline and the full manifest (`assets.json`) live there.

These WebP files are a copy of its `dist/` folder. To refresh them and the typed manifest
(`src/assets/artManifest.ts`), run `node scripts/import-art.mjs ../frostmark-art`.
Load images in code through `src/assets/artPack.ts` (`artUrl`, `preloadArt`, `loadTexture`, `artSlice`).
