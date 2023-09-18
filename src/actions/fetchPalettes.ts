'use server';

import paletteService from "@/services/palettes.service";

export default async function fetchPalettes(offset: number, limit: number) {
  const {data, error, count} = await paletteService.getAllPalettes(offset, limit);
  return {data, error, count};
}