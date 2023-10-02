/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Color {
    color_id: string
    created_at: string
    hex: string
    name: string
    palette_id: string | null
    rgb?: string;
    rgba?: string;
    hsla?: string;
    lab?: string;
    num?: string;
    cmyk?: string;
    [key: string]: any;
}