import { Color } from "./color.model";

export interface PaletteModel {
  created_at: string;
  description: string | null;
  emoji: string | null;
  is_enabled: boolean;
  name: string;
  palette_id: string;
  user_id: string;
  colors: Color[];
}