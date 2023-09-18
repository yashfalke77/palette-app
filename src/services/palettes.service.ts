import { Database } from "@/models/supabase";
import supabaseServer from "@/utils/supabase";

const paletteService = {
  getAllPalettes: async (offset: number, limit: number) => {
    const val = offset + limit - 1;
    return await supabaseServer.from('palettes').select('*, colors(*)', { count: "exact" })
      .range(offset, val)
      .returns<(Database['public']['Tables']['palettes']['Row'] & {
      colors: Database['public']['Tables']['colors']['Row'][]
    })[]>();
  }
};
export default paletteService;