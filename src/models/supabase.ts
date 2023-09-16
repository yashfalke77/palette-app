export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      colors: {
        Row: {
          color_id: string
          created_at: string
          hex: string
          name: string
          palette_id: string | null
        }
        Insert: {
          color_id?: string
          created_at?: string
          hex: string
          name: string
          palette_id?: string | null
        }
        Update: {
          color_id?: string
          created_at?: string
          hex?: string
          name?: string
          palette_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "colors_palette_id_fkey"
            columns: ["palette_id"]
            referencedRelation: "palettes"
            referencedColumns: ["palette_id"]
          }
        ]
      }
      palettes: {
        Row: {
          created_at: string
          description: string | null
          emoji: string | null
          is_enabled: boolean
          name: string
          palette_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          emoji?: string | null
          is_enabled?: boolean
          name: string
          palette_id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          emoji?: string | null
          is_enabled?: boolean
          name?: string
          palette_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "palettes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
