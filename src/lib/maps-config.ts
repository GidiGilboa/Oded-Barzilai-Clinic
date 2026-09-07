// Plain (non "use client") module so this is safe to import from both
// Server and Client Components. A value export imported from a "use
// client" file into a Server Component does not survive the RSC
// boundary as a real value, so this must live in its own file.

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

/** True when a Google Maps API key is configured (see `.env.local`). */
export const hasGoogleMapsApiKey = Boolean(apiKey);

export function getGoogleMapsApiKey(): string | undefined {
  return apiKey;
}
