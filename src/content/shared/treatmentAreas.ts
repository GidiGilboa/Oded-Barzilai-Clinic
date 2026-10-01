/**
 * The clinic's main treatment areas, shown as the icon/card overview on the
 * home page. Deliberately separate from `treatments.ts` (which powers the
 * full /treatments page) — this is a shorter, higher-level category list.
 */

export interface TreatmentArea {
  id: string;
  nameHe: string;
  nameEn: string;
  shortDescriptionHe: string;
  shortDescriptionEn: string;
  /** Filename under /public/icons, including extension (svg or png). */
  icon: string;
}

export const treatmentAreas: TreatmentArea[] = [
  {
    id: "restorative-dentistry",
    nameHe: "רפואת שיניים משמרת",
    nameEn: "Restorative Dentistry",
    shortDescriptionHe: "טיפול בעששת ושחזור שיניים פגועות בסתימות אסתטיות התואמות לגוון השן הטבעי.",
    shortDescriptionEn:
      "Treating decay and restoring damaged teeth with natural-looking, tooth-colored fillings.",
    icon: "hole_16028924.png",
  },
  {
    id: "preventive-hygiene",
    nameHe: "טיפולי שיננית (רפואת שיניים מניעתית)",
    nameEn: "Hygiene & Preventive Care",
    shortDescriptionHe: "ניקוי אבנית ופלאק, הדרכת צחצוח ומעקב תקופתי לשמירה על בריאות הפה.",
    shortDescriptionEn:
      "Plaque and tartar removal, brushing guidance, and regular checkups to protect your oral health.",
    icon: "search_3740480.png",
  },
  {
    id: "periodontics",
    nameHe: "טיפולי חניכיים (פריודונטיה)",
    nameEn: "Periodontics (Gum Treatment)",
    shortDescriptionHe: "אבחון וטיפול במחלות חניכיים, מהקצעת שורשים ועד ניתוחים לשחזור רקמה ועצם.",
    shortDescriptionEn:
      "Diagnosing and treating gum disease, from deep cleaning to surgical tissue and bone repair.",
    icon: "bacteria-in-teeth.svg",
  },
  {
    id: "root-canal",
    nameHe: "טיפולי שורש (אנדודונטיה)",
    nameEn: "Root Canal Treatment",
    shortDescriptionHe: "ניקוי וחיטוי תעלות השורש המזוהמות כדי להציל את השן ולמנוע עקירה.",
    shortDescriptionEn:
      "Cleaning and disinfecting infected root canals to save the natural tooth and prevent extraction.",
    icon: "dental-drill.svg",
  },
  {
    id: "oral-surgery",
    nameHe: "כירורגיה של הפה והלסתות",
    nameEn: "Oral & Maxillofacial Surgery",
    shortDescriptionHe: "עקירות מורכבות, הסרת ציסטות והכנת העצם לשיקום בטכנולוגיה מתקדמת.",
    shortDescriptionEn:
      "Complex extractions, cyst removal, and bone preparation for rehabilitation using advanced technology.",
    icon: "damage-teeth.svg",
  },
  {
    id: "dental-implants",
    nameHe: "ביצוע שתלים בפה",
    nameEn: "Dental Implants",
    shortDescriptionHe: "החדרת שתל טיטניום לעצם הלסת כתחליף טבעי ויציב לשורש השן החסרה.",
    shortDescriptionEn:
      "Placing a titanium implant in the jawbone as a stable, natural replacement for a missing tooth root.",
    icon: "teeth-implant.svg",
  },
  {
    id: "oral-rehabilitation",
    nameHe: "שיקום הפה על גבי שיניים ועל גבי שתלים",
    nameEn: "Oral Rehabilitation",
    shortDescriptionHe: "שחזור תפקוד ומראה החיוך באמצעות כתרים, גשרים או מבנים נתמכי שתלים.",
    shortDescriptionEn:
      "Restoring the smile's function and appearance with crowns, bridges, or implant-supported restorations.",
    icon: "dentures.svg",
  },
  {
    id: "aesthetic-dentistry",
    nameHe: "טיפולי שיניים אסתטיים",
    nameEn: "Aesthetic Dentistry",
    shortDescriptionHe: "שיפור מראה החיוך בחומרים אסתטיים תוך שמירה מלאה על בריאות השן.",
    shortDescriptionEn:
      "Improving the look of your smile with tooth-colored materials, while fully protecting tooth health.",
    icon: "dental-care_9217148.png",
  },
  {
    id: "veneers",
    nameHe: "ציפויי חרסינה בשיניים (למינייטס / וינירס)",
    nameEn: "Porcelain Veneers",
    shortDescriptionHe: "עלי חרסינה דקים המודבקים על השן ליצירת חיוך הוליוודי סימטרי ועמיד.",
    shortDescriptionEn:
      "Thin porcelain shells bonded to the teeth for a symmetrical, long-lasting Hollywood smile.",
    icon: "veneers.svg",
  },
  {
    id: "teeth-whitening",
    nameHe: "הלבנת שיניים",
    nameEn: "Teeth Whitening",
    shortDescriptionHe: "הבהרת גוון השיניים בטיפול מהיר ובטוח באמצעות ג'ל חמצון מרוכז.",
    shortDescriptionEn:
      "Brightening the shade of your teeth quickly and safely with a concentrated whitening gel.",
    icon: "icons8-smiling-mouth-50.png",
  },
];
