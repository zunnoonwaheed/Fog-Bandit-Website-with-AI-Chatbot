/**
 * Supabase is not wired into the live site. Quote chat uses POST /api/chat
 * with ANTHROPIC_API_KEY on Vercel — no Supabase env vars required.
 */
export const supabase = null;
