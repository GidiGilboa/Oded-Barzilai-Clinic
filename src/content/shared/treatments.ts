/**
 * Treatment catalogue.
 *
 * The exact treatment list has not been finalized by the clinic yet.
 * These are standard, generic dental-service categories meant as an
 * editable starting point — add, remove, or rewrite entries here without
 * touching any page or component.
 */

export interface Treatment {
  id: string;
  nameHe: string;
  nameEn: string;
  shortDescriptionHe: string;
  shortDescriptionEn: string;
  descriptionHe: string;
  descriptionEn: string;
  /** Icon name under /public/icons (without extension), used on the home page overview. */
  icon: string;
  /** Path under /public/images */
  image: string;
  imageAlt: { he: string; en: string };
  seoDescriptionHe: string;
  seoDescriptionEn: string;
}

export const treatments: Treatment[] = [
  {
    id: "checkups-and-hygiene",
    nameHe: "בדיקות וטיפולי מניעה",
    nameEn: "Checkups & Preventive Care",
    shortDescriptionHe: "בדיקה תקופתית, ניקוי אבנית ומעקב שוטף לשמירה על בריאות הפה.",
    shortDescriptionEn: "Routine exams, hygiene cleanings, and ongoing monitoring of oral health.",
    descriptionHe:
      "בדיקה תקופתית היא הבסיס לשמירה על בריאות השיניים והחניכיים לאורך זמן. הטיפול כולל בדיקה קלינית, ניקוי אבנית מקצועי, והסבר ברור על מצב הפה — כדי שתדעו בדיוק איפה אתם עומדים ומה, אם בכלל, נדרש בהמשך.",
    descriptionEn:
      "A routine dental exam is the foundation of long-term oral health. The visit includes a clinical examination, professional hygiene cleaning, and a clear explanation of your dental condition, so you know exactly where things stand and what, if anything, comes next.",
    icon: "dentist",
    image: "/images/clinic-patient-treatment.jpg",
    imageAlt: {
      he: "טיפול שיניים במרפאה, המטופל רגוע בכיסא הטיפולים",
      en: "A dental treatment in progress, patient relaxed in the treatment chair",
    },
    seoDescriptionHe: "בדיקות שיניים תקופתיות וניקוי אבנית במרפאת ד״ר עודד ברזילי ברעננה.",
    seoDescriptionEn: "Routine dental checkups and hygiene cleanings at Dr. Oded Barzilai's clinic in Ra'anana.",
  },
  {
    id: "restorative-dentistry",
    nameHe: "סתימות ושחזורים",
    nameEn: "Restorative Dentistry",
    shortDescriptionHe: "טיפול בעששת ושחזור שיניים פגומות בחומרים אסתטיים ועמידים.",
    shortDescriptionEn: "Treating decay and rebuilding damaged teeth with durable, natural-looking materials.",
    descriptionHe:
      "כאשר שן נפגעת מעששת, שבר או בלאי, המטרה היא להחזיר לה תפקוד וצורה טבעית באופן שמרני ומדויק ככל האפשר. השחזור נבחר בהתאם למצב השן הספציפי ולצרכים שלכם, תוך שיחה פתוחה על האפשרויות.",
    descriptionEn:
      "When a tooth is affected by decay, a fracture, or wear, the goal is to restore its function and natural shape as conservatively and precisely as possible. The restoration approach is chosen based on the specific tooth and your needs, with an open conversation about the options.",
    icon: "damage-teeth",
    image: "/images/doctor-xray-review.png",
    imageAlt: {
      he: "רופא השיניים בוחן צילום רנטגן של שיניים",
      en: "The dentist reviewing a dental X-ray",
    },
    seoDescriptionHe: "טיפולי סתימות ושחזור שיניים במרפאת שיניים ברעננה.",
    seoDescriptionEn: "Fillings and restorative dental treatment in Ra'anana.",
  },
  {
    id: "root-canal",
    nameHe: "טיפולי שורש",
    nameEn: "Root Canal Treatment",
    shortDescriptionHe: "טיפול בשן שהזיהום הגיע אל תוכה, במטרה לשמר אותה בפה.",
    shortDescriptionEn: "Treating infection inside a tooth, with the goal of keeping the natural tooth in place.",
    descriptionHe:
      "טיפול שורש נדרש כאשר הזיהום מגיע אל מוך השן וגורם לכאב או לדלקת. מטרת הטיפול היא לנקות את תעלות השורש, לשמר את השן הטבעית ולמנוע הישנות של הבעיה. אנו מקפידים להסביר כל שלב מראש כדי להפחית חשש ואי־ודאות.",
    descriptionEn:
      "Root canal treatment is needed when infection reaches the inner pulp of a tooth, causing pain or inflammation. The goal is to clean the root canals, preserve the natural tooth, and prevent the problem from returning. We explain each step in advance to reduce uncertainty and anxiety.",
    icon: "dental-drill",
    image: "/images/clinic-team-consultation.jpg",
    imageAlt: {
      he: "שני אנשי צוות רפואי בוחנים יחד צילום רנטגן של שיניים",
      en: "Two clinicians reviewing a dental X-ray together",
    },
    seoDescriptionHe: "טיפולי שורש במרפאתו של ד״ר עודד ברזילי, רעננה.",
    seoDescriptionEn: "Root canal treatment at Dr. Oded Barzilai's dental clinic, Ra'anana.",
  },
  {
    id: "oral-rehabilitation",
    nameHe: "שיקום הפה",
    nameEn: "Oral Rehabilitation",
    shortDescriptionHe: "תכנון וטיפול מקיף במקרים של שחיקה, אובדן שיניים או פה מורכב.",
    shortDescriptionEn: "Comprehensive planning and treatment for wear, tooth loss, or a complex bite.",
    descriptionHe:
      "שיקום הפה הוא תהליך מדורג המיועד למצבים בהם נדרשת התייחסות כוללת למערכת הלעיסה — בין אם עקב שחיקה, אובדן שיניים או שילוב של כמה בעיות. התהליך מתחיל תמיד באבחון מעמיק ובתוכנית טיפול שמותאמת אישית ומוסברת בשקיפות מלאה.",
    descriptionEn:
      "Oral rehabilitation is a staged process for situations that call for a comprehensive look at the whole bite — whether due to wear, tooth loss, or a combination of issues. It always begins with a thorough diagnosis and a treatment plan that is personalized and explained with full transparency.",
    icon: "dentures",
    image: "/images/doctor-portrait.jpg",
    imageAlt: {
      he: "ד״ר עודד ברזילי עומד בחדר הטיפולים במרפאה",
      en: "Dr. Oded Barzilai standing in the clinic's treatment room",
    },
    seoDescriptionHe: "שיקום הפה ברעננה — תכנון וטיפול מקיף אצל ד״ר עודד ברזילי.",
    seoDescriptionEn: "Oral rehabilitation in Ra'anana with Dr. Oded Barzilai.",
  },
  {
    id: "aesthetic-dentistry",
    nameHe: "רפואת שיניים אסתטית",
    nameEn: "Aesthetic Dentistry",
    shortDescriptionHe: "שיפור מראה החיוך תוך שמירה קפדנית על בריאות השן.",
    shortDescriptionEn: "Improving the look of your smile while carefully protecting the health of the tooth.",
    descriptionHe:
      "חיוך יפה מתחיל משן בריאה. טיפולי אסתטיקה דנטלית משלבים שיקולים ויזואליים עם עקרונות שמרניים של רפואת שיניים, כדי שהתוצאה תיראה טבעית ותחזיק לאורך זמן. כל תהליך מתחיל בשיחה על הציפיות שלכם ובבדיקה של מה שבאמת מתאים לפה שלכם.",
    descriptionEn:
      "A beautiful smile starts with a healthy tooth. Aesthetic dental treatments combine visual considerations with conservative dental principles, so the result looks natural and lasts. Every process starts with a conversation about your expectations and an honest look at what actually suits your smile.",
    icon: "veneers",
    image: "/images/clinic-staff-portrait.jpg",
    imageAlt: {
      he: "חברת צוות במרפאה עומדת לצד דגם שיניים",
      en: "A clinic team member standing beside a dental model",
    },
    seoDescriptionHe: "רפואת שיניים אסתטית במרפאה ברעננה.",
    seoDescriptionEn: "Aesthetic dentistry at a clinic in Ra'anana.",
  },
  {
    id: "childrens-dentistry",
    nameHe: "רפואת שיניים לילדים",
    nameEn: "Children's Dentistry",
    shortDescriptionHe: "ליווי רגוע ומותאם לגיל, כדי שהביקור אצל רופא השיניים יהיה חוויה טובה.",
    shortDescriptionEn: "Calm, age-appropriate care so a visit to the dentist is a good experience.",
    descriptionHe:
      "החוויה הראשונה של ילד אצל רופא השיניים משפיעה על היחס שלו לטיפולי שיניים לשנים רבות. אנו מקדישים תשומת לב לקצב של הילד, מסבירים כל שלב במילים פשוטות, ומעדיפים גישה סבלנית על פני מהירות.",
    descriptionEn:
      "A child's first experience at the dentist shapes how they feel about dental care for years to come. We pay attention to the child's pace, explain each step in simple terms, and favor patience over speed.",
    icon: "cavities",
    image: "/images/clinic-patient-treatment.jpg",
    imageAlt: {
      he: "טיפול שיניים רגוע במרפאה",
      en: "A calm dental treatment in the clinic",
    },
    seoDescriptionHe: "רפואת שיניים לילדים ברעננה — ליווי רגוע ומותאם.",
    seoDescriptionEn: "Children's dentistry in Ra'anana — calm, age-appropriate care.",
  },
];

export function getTreatmentById(id: string): Treatment | undefined {
  return treatments.find((t) => t.id === id);
}
