import { Database } from "./supabase";

export interface Palette {
    created_at: string
    description: string | null
    emoji: string | null
    is_enabled: boolean
    name: string
    palette_id: string
    user_id: string
    colors: Database["public"]["Tables"]["colors"]["Row"][];
}