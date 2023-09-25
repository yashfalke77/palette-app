import { PaletteModel } from "@/models/palette.model";
import chroma from "chroma-js";

function generateDifferentUnit(starterPalette:PaletteModel){
  const newPalette:PaletteModel = {
    name: starterPalette.name,
    palette_id: starterPalette.palette_id,
    emoji: starterPalette.emoji,
    created_at: starterPalette.created_at,
    description: starterPalette.description,
    user_id: starterPalette.user_id,
    is_enabled: starterPalette.is_enabled,
    colors: []
  };

  for (const color of starterPalette.colors){
    const hsla = chroma(color.hex).hsl().map(ele => ((Math.round(ele * 100) / 100).toFixed(2)));
    const lab = chroma(color.hex).lab().map(ele => ((Math.round(ele * 100) / 100).toFixed(2)));
    const cmyk = chroma(color.hex).cmyk().map(ele => ((Math.round(ele * 100) / 100).toFixed(2)));
    newPalette.colors.push({
      color_id: color.color_id,
      created_at: color.created_at,
      palette_id: color.palette_id,
      name: color.name,
      hex: color.hex,
      rgb: String(chroma(color.hex).rgb()),
      rgba: String(chroma(color.hex).rgba()),
      hsla: String(hsla),
      lab: String(lab),
      num: String(chroma(color.hex).num()),
      cmyk: String(cmyk),
    });
  }

  return newPalette;
}

export {generateDifferentUnit};