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
      "המרפאה מנוהלת על ידי ד״ר עודד ברזילי, רופא שיניים כללי. ד״ר ברזילי מטפל במגוון רחב של מצבים, מבדיקה תקופתית ועד שיקום הפה.",
    questionEn: "Who provides treatment at the clinic?",
    answerEn:
      "The clinic is led by Dr. Oded Barzilai, a general dentist. Dr. Barzilai treats a wide range of conditions, from routine checkups to oral rehabilitation.",
  },
  {
    id: "location",
    questionHe: "איפה המרפאה נמצאת?",
    answerHe: "המרפאה ממוקמת ברחוב הנופר 2, רעננה.",
    questionEn: "Where is the clinic located?",
    answerEn: "The clinic is located at HaNofar 2, Ra'anana, Israel.",
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
    id: "languages",
    questionHe: "באילו שפות האתר זמין?",
    answerHe: "האתר זמין בעברית ובאנגלית. אפשר לעבור בין השפות מהתפריט העליון בכל עמוד.",
    questionEn: "What languages is the website available in?",
    answerEn: "The website is available in Hebrew and English. You can switch languages from the menu at the top of any page.",
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
];
