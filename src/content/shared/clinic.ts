/**
 * Single source of truth for the clinic's factual identity (NAP data, etc).
 *
 * This file is consumed by both the visible page content and the JSON-LD
 * structured data, so the two can never drift apart. Anything not yet
 * confirmed by the clinic is a clearly named placeholder — never invent
 * real-looking values here.
 */

export const clinic = {
  doctorNameHe: "ד״ר עודד ברזילי",
  doctorNameEn: "Dr. Oded Barzilai",
  clinicNameHe: "ברזילי",
  clinicNameEn: "Barzilai Dental Clinic",
  sloganHe: "מרפאת שיניים ושיקום הפה",
  sloganEn: "Dental Care & Oral Rehabilitation",

  streetAddressHe: "הנופר 2",
  streetAddressEn: "HaNofar 2",
  cityHe: "רעננה",
  cityEn: "Ra'anana",
  countryHe: "ישראל",
  countryEn: "Israel",
  postalCode: undefined as string | undefined,

  phoneDisplay: "052-326-5416",
  phoneDisplayEn: "052-326-5416",
  /** E.164 value for tel:/JSON-LD use. */
  phoneE164: "+972523265416" as string | undefined,

  whatsappDisplay: "052-326-5416",
  whatsappE164: "+972523265416" as string | undefined,

  email: "odedbarz@yahoo.com",

  mapsEmbedUrl:
    "https://www.google.com/maps?q=%D7%94%D7%A0%D7%95%D7%A4%D7%A8+2%2C+%D7%A8%D7%A2%D7%A0%D7%A0%D7%94&output=embed",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=%D7%94%D7%A0%D7%95%D7%A4%D7%A8+2+%D7%A8%D7%A2%D7%A0%D7%A0%D7%94",

  /** Geocoded from the street address (הנופר 2, רעננה) via OpenStreetMap Nominatim. */
  geo: { latitude: 32.1940755, longitude: 34.8838056 },

  siteUrl: "https://www.barzilai-dental.example",
} as const;

export const openingHours = [
  {
    daysHe: "ראשון–חמישי",
    daysEn: "Sunday–Thursday",
    hours: "09:00–17:00",
    opens: "09:00",
    closes: "17:00",
    schemaDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
  },
  {
    daysHe: "שישי",
    daysEn: "Friday",
    hours: "08:00–12:00",
    opens: "08:00",
    closes: "12:00",
    schemaDays: ["Friday"],
  },
] as const;
