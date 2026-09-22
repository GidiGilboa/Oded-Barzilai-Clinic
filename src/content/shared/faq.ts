export interface FaqItem {
  id: string;
  questionHe: string;
  answerHe: string;
  questionEn: string;
  answerEn: string;
}

/**
 * FAQ content is written to be genuinely useful to a nervous first-time
 * visitor, and to give search engines and AI systems clear, factual
 * answers about who the clinic is, what it does, and where it is.
 */
export const faqItems: FaqItem[] = [
  {
    id: "who",
    questionHe: "מי מטפל במרפאה?",
    answerHe:
      "המרפאה מנוהלת על ידי ד״ר עודד ברזילי, רופא שיניים כללי. ד״ר ברזילי מטפל במגוון רחב של מצבים, מבדיקה תקופתית ועד שיקום הפה. לצדו פועלת במרפאה גם השיננית חגית ברזילי, המעניקה טיפולי שיננית.",
    questionEn: "Who provides treatment at the clinic?",
    answerEn:
      "The clinic is led by Dr. Oded Barzilai, a general dentist. Dr. Barzilai treats a wide range of conditions, from routine checkups to oral rehabilitation. Hagit Barzilai, a dental hygienist, also provides hygiene treatments at the clinic.",
  },
  {
    id: "anxiety",
    questionHe: "אני חושש/ת מטיפולי שיניים — האם זה מקום מתאים בשבילי?",
    answerHe:
      "כן. חלק ניכר מהגישה במרפאה מוקדש למטופלים חוששים: הסבר מלא לפני כל שלב, אפשרות לעצור ולשאול, וקצב טיפול שמותאם אישית ולא נכפה עליכם.",
    questionEn: "I'm anxious about dental treatment — is this clinic a good fit for me?",
    answerEn:
      "Yes. A significant part of the clinic's approach is dedicated to anxious patients: a full explanation before every step, the option to pause and ask questions, and a treatment pace that is adapted to you rather than imposed.",
  },
  {
    id: "first-visit",
    questionHe: "מה קורה בביקור הראשון?",
    answerHe:
      "הביקור הראשון כולל בדרך כלל בדיקה קלינית ושיחה על ההיסטוריה הדנטלית שלכם, כדי לבנות תמונה מלאה לפני שממליצים על כל טיפול.",
    questionEn: "What happens during the first visit?",
    answerEn:
      "The first visit typically includes a clinical examination and a conversation about your dental history, to build a full picture before recommending any treatment.",
  },
  {
    id: "booking",
    questionHe: "איך קובעים תור?",
    answerHe: "אפשר לקבוע תור בטלפון, בהודעת וואטסאפ, או דרך טופס יצירת הקשר באתר.",
    questionEn: "How do I book an appointment?",
    answerEn: "You can book an appointment by phone, WhatsApp message, or through the contact form on this website.",
  },
  {
    id: "root-canal-pain",
    questionHe: "האם טיפול שורש הוא טיפול כואב?",
    answerHe:
      "כיום, בזכות אלחוש מקומי מתקדם וטכנולוגיות חדישות, טיפול שורש מבוצע כמעט ללא כאב כלל. במידה וישנה רגישות קלה לאחר ירידת ההרדמה, ניתן לטפל בה בקלות באמצעות משככי כאבים רגילים.",
    questionEn: "Is root canal treatment painful?",
    answerEn:
      "Today, thanks to advanced local anesthesia and modern technology, root canal treatment is performed with almost no pain at all. If there is mild sensitivity after the anesthesia wears off, it can easily be managed with regular over-the-counter pain relievers.",
  },
  {
    id: "hygienist-frequency",
    questionHe: "כל כמה זמן מומלץ לבקר אצל השיננית?",
    answerHe:
      "ההמלצה הכללית לרוב האוכלוסייה היא לבקר אצל השיננית אחת ל-6 חודשים. מטופלים הסובלים מבעיות חניכיים, מעשנים או בעלי נטייה מוגברת להצטברות אבנית עשויים להזדקק לביקורת וניקוי מדי 3–4 חודשים.",
    questionEn: "How often is it recommended to visit the hygienist?",
    answerEn:
      "The general recommendation for most people is to visit the hygienist once every 6 months. Patients with gum problems, smokers, or those prone to heavier tartar buildup may need a checkup and cleaning every 3–4 months.",
  },
  {
    id: "implant-vs-bridge",
    questionHe: "מה ההבדל בין השתלת שן לבין גשר?",
    answerHe:
      "השתלת שן כוללת החדרת בורג טיטניום לעצם הלסת שמחליף את שורש השן החסרה, ללא צורך בפגיעה בשיניים השכנות. גשר, לעומת זאת, דורש השחזה והשענה על השיניים הסמוכות כדי למלא את המרווח.",
    questionEn: "What's the difference between a dental implant and a bridge?",
    answerEn:
      "A dental implant involves placing a titanium post into the jawbone to replace the missing tooth's root, without affecting the neighboring teeth. A bridge, by contrast, requires shaping and relying on the adjacent teeth to span the gap.",
  },
  {
    id: "child-first-visit",
    questionHe: "מאיזה גיל מומלץ לקחת ילד לביקורת ראשונה אצל רופא שיניים?",
    answerHe:
      "המלצת הארגונים לרפואת שיניים היא להגיע לביקורת ראשונה עם בקיעת השן הראשונה, או לכל המאוחר סביב גיל שנה. ביקור מוקדם מסייע לאתר בעיות מראש ומרגיל את הילד לסביבת המרפאה.",
    questionEn: "At what age should a child have their first dental checkup?",
    answerEn:
      "Dental associations recommend a first checkup when the first tooth erupts, or by around age one at the latest. An early visit helps catch issues early and gets the child comfortable with the clinic environment.",
  },
  {
    id: "gum-bleeding",
    questionHe: "למה החניכיים שלי מדממות בזמן צחצוח?",
    answerHe:
      "דימום מהחניכיים הוא בדרך כלל הסימן הראשון לדלקת חניכיים, הנובעת הצטברות של פלאק (רובד חיידקים) ואבנית. חשוב לא להפסיק לצחצח, אלא להקפיד על היגיינה ולפנות לשיננית או לרופא לבדיקה.",
    questionEn: "Why do my gums bleed when I brush?",
    answerEn:
      "Bleeding gums are usually the first sign of gum inflammation, caused by a buildup of plaque and tartar. It's important not to stop brushing — keep up good hygiene and see the hygienist or dentist for a checkup.",
  },
  {
    id: "extraction-aftercare",
    questionHe: "אילו הנחיות יש לבצע לאחר עקירת שן?",
    answerHe:
      "מומלץ ללחוץ על גזה באזור העקירה כ-20–30 דקות, להימנע מאכילה ושתייה חמה ב-24 השעות הראשונות, לא לירוק ולא לשטוף את הפה בחוזקה, להימנע מעישון לפחות ל-24 שעות ולציית להנחיות הרופא לגבי משככי כאבים.",
    questionEn: "What aftercare instructions should I follow after a tooth extraction?",
    answerEn:
      "It's recommended to bite down on gauze over the extraction site for about 20–30 minutes, avoid eating or drinking hot beverages for the first 24 hours, avoid spitting or rinsing your mouth vigorously, avoid smoking for at least 24 hours, and follow the dentist's instructions regarding pain relievers.",
  },
];
