/**
 * Full treatment catalogue, powering the /treatments page.
 *
 * Separate from `treatmentAreas.ts` (the shorter overview shown on the home
 * page) — this holds the complete, long-form write-up per treatment.
 */

export interface Treatment {
  id: string;
  nameHe: string;
  nameEn: string;
  descriptionHe: string;
  descriptionEn: string;
  /** Filename under /public/icons, including extension (svg or png). */
  icon: string;
}

export const treatments: Treatment[] = [
  {
    id: "restorative-dentistry",
    nameHe: "רפואת שיניים משמרת",
    nameEn: "Restorative Dentistry",
    descriptionHe:
      "רפואת שיניים משמרת היא הבסיס והלב הפועם של הפעילות השוטפת במרפאה שלנו, ומטרתה העליונה היא להגן, לרפא ולשמור על השיניים הטבעיות שלכם מפני נזקי העששת (חורים בשיניים) והשחיקה. התחום מתמקד באבחון מוקדם של נגעים ובטיפול בהם רגע לפני שהם מחמירים ודורשים פרוצדורות מורכבות. במרפאתנו אנו מבצעים טיפולים משמרים הכוללים סתימות (שחזורים) אסתטיות מחומרים מורכבים (קומפוזיט) המתמזגים באופן מושלם עם גוון השן הטבעי, בניגוד לסתימות האמלגם הכהות של העבר. בנוסף, אנו משתמשים בטכנולוגיות מתקדמות לניקוי קפדני של חומר השן הפגוע ואיטומו המלא. הגישה הטיפולית שלנו ברפואה משמרת היא שמרנית ככל הניתן: אנו עושים הכל כדי להציל ולשמר כל חלק בריא של השן, ובכך מונעים כאבים, זיהומים וצורך בטיפולי שורש או עקירות בעתיד. טיפול תקופתי ומעקב קבוע במרפאה מבטיחים שהחיוך שלכם יישאר חזק, תפקוד הלעיסה ישמר והשיניים שלכם יאריכו ימים.",
    descriptionEn:
      "Restorative dentistry is the foundation and the beating heart of our clinic's everyday work, and its primary goal is to protect, heal, and preserve your natural teeth from the damage caused by decay (cavities) and wear. This field focuses on diagnosing lesions early and treating them before they worsen and require more complex procedures. At our clinic, we perform restorative treatments that include aesthetic fillings (restorations) made of composite materials that blend perfectly with your tooth's natural shade, unlike the dark amalgam fillings of the past. In addition, we use advanced technology for the thorough cleaning of damaged tooth material and its complete sealing. Our treatment approach in restorative dentistry is as conservative as possible: we do everything we can to save and preserve every healthy part of the tooth, thereby preventing pain, infection, and the future need for root canal treatment or extraction. Regular treatment and ongoing follow-up at our clinic ensure that your smile stays strong, your chewing function is preserved, and your teeth last for years to come.",
    icon: "hole_16028924.png",
  },
  {
    id: "preventive-hygiene",
    nameHe: "טיפולי שיננית (רפואת שיניים מניעתית)",
    nameEn: "Hygiene & Preventive Care",
    descriptionHe:
      "טיפולי השיננית במרפאה שלנו הם קו ההגנה הראשון והחשוב ביותר בשמירה על בריאות הפה והשיניים שלכם. לאורך זמן, גם עם צחצוח קפדני בבית, נוצרים על השיניים ובמרווחים שביניהן משקעים של אבנית ורובד חיידקים (פלאק) שאינם ניתנים להסרה עצמית. במהלך הטיפול במרפאתנו, השיננית משתמשת במכשור ייעודי, עדין ומתקדם כדי לפרק את האבנית, להסיר כתמי צבע חיצוניים ולנקות באופן יסודי את האזורים הנסתרים מעין. בנוסף, השיננית מבצעת פעולות מניעתיות כמו מריחת פלואוריד לחיזוק זגוגית השן ומספקת הדרכה אישית לטכניקות צחצוח ושימוש באביזרים דנטליים. הזנחה של ביקורים סדירים מובילה לרוב להצטברות חיידקים, אשר מהווה את הגורם המרכזי להתפתחות עששת, ריח רע מהפה ומחלות חניכיים. אנו ממליצים לבצע טיפול זה אצלנו פעם בחצי שנה כדי לזהות בעיות בשלב מוקדם, למנוע טיפולים מורכבים ולשמור על תחושת רעננות וניקיון בפה.",
    descriptionEn:
      "Hygienist treatments at our clinic are the first and most important line of defense in maintaining the health of your mouth and teeth. Over time, even with careful brushing at home, deposits of tartar and bacterial plaque build up on the teeth and in the spaces between them that cannot be removed on your own. During treatment at our clinic, the hygienist uses dedicated, gentle, and advanced instruments to break down tartar, remove external stains, and thoroughly clean the areas hidden from view. In addition, the hygienist performs preventive measures such as applying fluoride to strengthen the tooth enamel and provides personalized guidance on brushing techniques and the use of dental aids. Neglecting regular visits usually leads to a buildup of bacteria, which is the main cause of tooth decay, bad breath, and gum disease. We recommend this treatment once every six months to identify problems at an early stage, prevent complex treatments, and keep your mouth feeling fresh and clean.",
    icon: "search_3740480.png",
  },
  {
    id: "periodontics",
    nameHe: "טיפולי חניכיים (פריודונטיה)",
    nameEn: "Periodontics (Gum Treatment)",
    descriptionHe:
      "מחלות חניכיים הן הגורם השכיח ביותר לאובדן שיניים אצל מבוגרים, ובמרפאה שלנו אנו שמים דגש עצום על אבחון, מניעה וטיפול במחלות אלו כדי להגן על המשענת של חיוככם. החניכיים והעצם התומכת בהן מהווים את המערכת האוחזת ומייצבת את השיניים בפה. כאשר חיידקים חודרים אל מתחת לקו החניכיים, מתפתחת תגובה דלקתית שמתחילה בדימום, נפיחות ורגישות (ג׳ינג׳יביטיס), ועלולה להחמיר להרס של העצם התומכת (פריודונטיטיס). הטיפולים בתחום זה במרפאתנו נעים בין ״הקצעת שורשים״ – ניקוי עמוק, יסודי ותת-חניכי המבוצע בהרדמה מקומית שמטרתו לסלק כיסי חיידקים – לבין ניתוחי חניכיים מורכבים לשחזור עצם או רקמה שנסוגה. טיפול חניכיים מוצלח אצלנו עוצר את נסיגת העצם, מונע ניידות ואובדן של שיניים, ומשפר את הבריאות הכללית, שכן דלקות חניכיים כרוניות קשורות באופן ישיר גם למחלות מערכתיות כמו סוכרת ובעיות לב.",
    descriptionEn:
      "Gum disease is the most common cause of tooth loss in adults, and at our clinic we place tremendous emphasis on diagnosing, preventing, and treating these diseases to protect the foundation of your smile. The gums and the supporting bone form the system that holds and stabilizes the teeth in the mouth. When bacteria penetrate below the gumline, an inflammatory response develops that begins with bleeding, swelling, and sensitivity (gingivitis), and can worsen into destruction of the supporting bone (periodontitis). Treatments in this field at our clinic range from \"root planing\" — a deep, thorough, sub-gingival cleaning performed under local anesthesia aimed at eliminating bacterial pockets — to complex gum surgeries to rebuild bone or recede tissue. Successful gum treatment at our clinic stops bone recession, prevents tooth mobility and loss, and improves overall health, since chronic gum inflammation is also directly linked to systemic diseases such as diabetes and heart problems.",
    icon: "bacteria-in-teeth.svg",
  },
  {
    id: "root-canal",
    nameHe: "טיפולי שורש (אנדודונטיה)",
    nameEn: "Root Canal Treatment",
    descriptionHe:
      "כאשר עששת עמוקה, סדק או חבלה חודרים את השכבות החיצוניות של השן ומגיעים אל מרכז השן (מוך השן), נוצרת דלקת או זיהום ברקמת העצב וכלי הדם. מצב זה מלווה לרוב בכאבים עזים, רגישות קיצונית לקור וחום או נפיחות, ותפקידו של טיפול השורש המבוצע במרפאתנו הוא להציל את השן המקורית שלכם מעקירה. במהלך הטיפול, רופא השיניים יוצר פתח קטן בכותרת השן, מנקה ומסלק ברגישות רבה את רקמת העצב המזוהמת או המתה מתוך תעלות השורש, ומחטא אותן היטב מחיידקים. לאחר מכן, התעלות המרוקנות נאטמות באמצעות חומר ייעודי כדי למנוע חדירה חוזרת של זיהומים, והשן נסגרת בשלב ראשון על ידי סתימה זמנית. טיפול שורש מקצועי, מדויק וטכנולוגי במרפאה שלנו מנטרל את הכאב לחלוטין ומאפשר לשן להמשיך ולתפקד בפה שלכם למשך שנים רבות, כל עוד היא משוקמת כראוי בהמשך.",
    descriptionEn:
      "When deep decay, a crack, or an injury penetrates the outer layers of the tooth and reaches its center (the pulp), inflammation or infection develops in the nerve and blood vessel tissue. This condition is usually accompanied by severe pain, extreme sensitivity to cold and heat, or swelling, and the purpose of the root canal treatment performed at our clinic is to save your natural tooth from extraction. During treatment, the dentist creates a small opening in the crown of the tooth, carefully cleans and removes the infected or dead nerve tissue from the root canals, and thoroughly disinfects them of bacteria. The emptied canals are then sealed with a dedicated material to prevent infection from re-entering, and the tooth is closed in a first stage with a temporary filling. Professional, precise, and technologically advanced root canal treatment at our clinic completely neutralizes the pain and allows the tooth to continue functioning in your mouth for many years, as long as it is properly restored afterward.",
    icon: "dental-drill.svg",
  },
  {
    id: "oral-surgery",
    nameHe: "כירורגיה של הפה והלסתות",
    nameEn: "Oral & Maxillofacial Surgery",
    descriptionHe:
      "תחום הכירורגיה במרפאתנו כולל מגוון פרוצדורות פולשניות וכירורגיות המבוצעות בחלל הפה, בעצמות הלסת וברקמות הסובבות אותן, תחת תנאי סטריליזציה קפדניים ביותר. הטיפולים הנפוצים ביותר במסגרת זו אצלנו הם עקירות שיניים מורכבות (כמו שיני בינה כלואות הנמצאות עמוק בעצם ועלולות להזיק לשיניים הסמוכות), הסרת ציסטות, וביצוע ביופסיות מחלל הפה במידת הצורך. מעבר לכך, הכירורגיה מהווה את הבסיס להכנת הפה לשיקום, וכוללת ניתוחים מקדימים לבניית עצם (השתלות עצם והרמות סינוס) באזורים שבהם חסר נפח מספיק לצורך החדרת שתלים. הכירורגיה המודרנית במרפאה שלנו עושה שימוש בטכנולוגיות מתקדמות, כגון סריקות תלת-ממדיות (CT) ותכנון ממוחשב, המאפשרים לרופא לבצע את הפעולות ברמת דיוק מקסימלית, תוך הפחתה משמעותית של הכאב, הנפיחות וזמן ההחלמה של המטופל.",
    descriptionEn:
      "The field of surgery at our clinic includes a range of invasive and surgical procedures performed in the oral cavity, the jawbones, and the tissues surrounding them, under the strictest sterilization conditions. The most common treatments in this area at our clinic are complex tooth extractions (such as impacted wisdom teeth located deep in the bone that may damage neighboring teeth), cyst removal, and oral biopsies when needed. Beyond this, surgery forms the foundation for preparing the mouth for rehabilitation, and includes preliminary bone-building procedures (bone grafts and sinus lifts) in areas lacking sufficient volume for implant placement. Modern surgery at our clinic makes use of advanced technologies, such as 3D (CT) scans and computerized planning, which allow the dentist to perform procedures with maximum precision, while significantly reducing the patient's pain, swelling, and recovery time.",
    icon: "damage-teeth.svg",
  },
  {
    id: "dental-implants",
    nameHe: "ביצוע שתלים בפה",
    nameEn: "Dental Implants",
    descriptionHe:
      "השתלות שיניים חוללו מהפכה ברפואת השיניים, ובמרפאתנו הן מבוצעות כפתרון המוביל, הבטוח והטבעי ביותר להחלפת שיניים חסרות. שתל דנטלי הוא למעשה בורג קטן העשוי מטיטניום או מחומר תואם ביולוגית אחר, המוחדר בניתוח מדויק במרפאה אל תוך עצם הלסת ומשמש כתחליף לשורש השן המקורית שחזרה. לאחר החדרתו, מתרחש תהליך ביולוגי שבו תאי העצם של המטופל גדלים סביב השתל וננעלים עליו, מה שיוצר עיגון חזק ויציב במיוחד. תהליך הקליטה של השתל אורך בדרך כלל מספר חודשים, ובסיומו הוא יכול לשאת עליו כתר, גשר או לתמוך בתותבת. היתרון העצום של שתלים המבוצעים אצלנו הוא שהם מונעים את הצורך בהשחזת שיניים בריאות סמוכות, שומרים על נפח עצם הלסת ומחזירים לכם את כושר הלעיסה המלא ואת הביטחון לחייך ולדבר בחופשיות.",
    descriptionEn:
      "Dental implants have revolutionized dentistry, and at our clinic they are performed as the leading, safest, and most natural solution for replacing missing teeth. A dental implant is essentially a small screw made of titanium or another biocompatible material, inserted through a precise procedure at our clinic into the jawbone, where it serves as a replacement for the missing tooth's original root. After it is placed, a biological process takes place in which the patient's bone cells grow around the implant and lock onto it, creating an especially strong and stable anchor. The implant's integration process usually takes several months, after which it can support a crown, a bridge, or a denture. The huge advantage of implants performed at our clinic is that they eliminate the need to grind down healthy neighboring teeth, preserve the volume of the jawbone, and restore your full chewing ability and the confidence to smile and speak freely.",
    icon: "teeth-implant.svg",
  },
  {
    id: "oral-rehabilitation",
    nameHe: "שיקום הפה על גבי שיניים ועל גבי שתלים",
    nameEn: "Oral Rehabilitation",
    descriptionHe:
      "שיקום הפה הוא הענף הארכיטקטוני של המרפאה שלנו, המתמקד בהחזרת התפקוד המכני, המבנה והמראה האסתטי של מערכת השיניים, בין אם מדובר בשן בודדת ובין אם בשיקום פה שלם.\n\n• שיקום על גבי שיניים: מתבצע לאחר הרס נרחב של כותרת השן (למשל, בעקבות טיפול שורש או ריקבון עמוק). הרופא מכין את השן המקורית ומלביש עליה כתר (מחרסינה או זירקוניה) שמגן עליה מפני שבר ומחזיר לה את צורתה המקורית. במקרים של חוסר בשן, ניתן לבצע ״גשר״ הנשען על השיניים השכנות.\n\n• שיקום על גבי שתלים: שלב זה מגיע לאחר שהשתל הכירורגי נקלט בהצלחה בעצם. הרופא מחבר אל השתל מבנה מיוחד, ועליו מתקין את הכתר או הגשר המלאכותי. השיקום אצלנו מתוכנן בקפידה ובאמצעות הדמיות דיגיטליות כדי ליצור סגירת שיניים (מנשך) מאוזנת ובריאה, המאפשרת דיבור תקין, לעיסה נוחה ומראה פנים הרמוני וצעיר.",
    descriptionEn:
      "Oral rehabilitation is the architectural branch of our clinic, focused on restoring the mechanical function, structure, and aesthetic appearance of the dentition, whether for a single tooth or for rehabilitating the entire mouth.\n\n• Rehabilitation on natural teeth: performed after extensive destruction of the tooth's crown (for example, following root canal treatment or deep decay). The dentist prepares the original tooth and fits it with a crown (porcelain or zirconia) that protects it from fracture and restores its original shape. In cases where a tooth is missing, a \"bridge\" resting on the neighboring teeth can be made.\n\n• Rehabilitation on implants: this stage comes after the surgical implant has successfully integrated into the bone. The dentist attaches a special structure to the implant, onto which the artificial crown or bridge is fitted. Rehabilitation at our clinic is carefully planned using digital imaging to create a balanced, healthy bite that allows for normal speech, comfortable chewing, and a harmonious, youthful facial appearance.",
    icon: "dentures.svg",
  },
  {
    id: "aesthetic-dentistry",
    nameHe: "טיפולי שיניים אסתטיים",
    nameEn: "Aesthetic Dentistry",
    descriptionHe:
      "בעוד שטיפולים קלאסיים מתמקדים בריפוי, רפואת שיניים אסתטית במרפאתנו שמה דגש על שיפור המראה החזותי של החיוך שלכם, תוך שמירה מלאה על הבריאות והתפקוד. תחום זה נותן מענה מותאם אישית למטופלים הסובלים משיניים מוכתמות, שבורות, שחוקות, מרווחי שיניים לא מחמיאים או שיניים בעלות צורה לא פרופורציונלית. הטיפולים אצלנו כוללים שימוש בחומרים מתקדמים ועמידים בגוון השן (כמו קומפוזיט) לשחזור שברים בלתי נראים, עיצוב מחדש של קו החניכיים לחיוך מאוזן וסגירת רווחים. כיום, אסתטיקה דנטלית במרפאה שלנו אינה נחשבת למותרות אלא לחלק בלתי נפרד מרווחתכם הנפשית, כאשר המטרה המרכזית שלנו היא ליצור עבורכם חיוך שנראה טבעי, בריא וקורן, המתאים באופן מושלם לתווי הפנים הייחודיים של כל אדם.",
    descriptionEn:
      "While classic treatments focus on healing, aesthetic dentistry at our clinic places emphasis on improving the visual appearance of your smile, while fully preserving health and function. This field provides a personalized response for patients suffering from stained, chipped, worn teeth, unflattering gaps, or disproportionately shaped teeth. Our treatments include the use of advanced, durable, tooth-colored materials (such as composite) for invisible repair of chips, reshaping the gumline for a balanced smile, and closing gaps. Today, dental aesthetics at our clinic is not considered a luxury but an inseparable part of your emotional well-being, with our central goal being to create a smile for you that looks natural, healthy, and radiant, perfectly suited to each person's unique facial features.",
    icon: "dental-care_9217148.png",
  },
  {
    id: "veneers",
    nameHe: "ציפויי חרסינה בשיניים (למינייטס / וינירס)",
    nameEn: "Porcelain Veneers",
    descriptionHe:
      "ציפויי חרסינה הם אחד הפתרונות היוקרתיים והמתקדמים ביותר שאנו מציעים במרפאה להשגת ״חיוך הוליוודי מושלם״, סימטרי ועמיד לאורך שנים. מדובר בעלי חרסינה דקיקים במיוחד (בעובי של חלקי מילימטר) המיוצרים בהתאמה אישית מלאה במעבדה דיגיטלית, ומודבקים בדבק חזק ומיוחד על גבי המשטח הקדמי של השיניים שלכם. לצורך כך, נדרשת לרוב השחזה מזערית ושמרנית בלבד של שכבת האמייל החיצונית של השן. הציפויים מאפשרים לנו לשנות לחלוטין ובאופן מידי את הגוון של השיניים (גם במקרים של כתמים פנימיים קשים שלא מגיבים להלבנה), לתקן פגמים מבניים, ליישר אופטית שיניים עקומות קלות ולסגור רווחים. החרסינה בה אנו משתמשים מתאפיינת ברמת שקיפות וברק שמחקים באופן מושלם את זגוגית השן הטבעית, ובנוסף היא עמידה לחלוטין בפני כתמי קפה, תה ועישון.",
    descriptionEn:
      "Porcelain veneers are one of the most prestigious and advanced solutions we offer at our clinic for achieving a \"perfect Hollywood smile\" that is symmetrical and long-lasting. These are extremely thin porcelain shells (a fraction of a millimeter thick), custom-made in a digital laboratory, and bonded with a strong, special adhesive to the front surface of your teeth. This typically requires only minimal, conservative shaving of the tooth's outer enamel layer. Veneers allow us to completely and immediately change the shade of the teeth (even in cases of stubborn internal stains that don't respond to whitening), correct structural flaws, optically straighten slightly crooked teeth, and close gaps. The porcelain we use is characterized by a level of translucency and shine that perfectly mimics natural tooth enamel, and it is also completely resistant to stains from coffee, tea, and smoking.",
    icon: "veneers.svg",
  },
  {
    id: "teeth-whitening",
    nameHe: "הלבנת שיניים",
    nameEn: "Teeth Whitening",
    descriptionHe:
      "הלבנת שיניים (או הבהרת שיניים) היא הפרוצדורה האסתטית המבוקשת והמהירה ביותר לשדרוג מראה החיוך שלכם, ואנו מציעים אותה במרפאה כטיפול בטוח ומבוקר. צבע השיניים משתנה עם השנים כתוצאה מחדירת פיגמנטים ממאכלים, משקאות (קפה, קולה, יין אדום), עישון, ותהליכי הזדקנות טבעיים שבהם שכבת הדנטין הפנימית והכהה של השן מתעבה. במהלך הטיפול אצלנו, מורחים על השיניים ג'ל פעיל המכיל ריכוז מבוקר ומאושר של חומר חמצון, החודר אל נקבוביות האמייל, מפרק את מולקולות הכתמים ומבהיר את השן בכמה דרגות. אנו מבצעים במרפאה הלבנה מהירה ומתאימים לכם ערכה ביתית מבוקרת באמצעות סדים שקופים המיוצרים בדיוק לפי מידת המטופל. מדובר בטיפול שאינו פוגע בזגוגית השן, ומעניק מראה רענן, צעיר וקורן לחיוך שלכם.",
    descriptionEn:
      "Teeth whitening (or tooth brightening) is the most sought-after and fastest aesthetic procedure for upgrading the look of your smile, and we offer it at our clinic as a safe, controlled treatment. Tooth color changes over the years as a result of pigments penetrating from foods, beverages (coffee, cola, red wine), smoking, and natural aging processes in which the tooth's inner, darker dentin layer thickens. During treatment at our clinic, an active gel containing a controlled, approved concentration of a whitening agent is applied to the teeth, penetrating the pores of the enamel, breaking down stain molecules, and brightening the tooth by several shades. We perform fast in-clinic whitening and also fit you with a controlled take-home kit using clear trays made precisely to your measurements. This treatment does not harm the tooth enamel, and gives your smile a fresh, youthful, radiant look.",
    icon: "icons8-smiling-mouth-50.png",
  },
];

export function getTreatmentById(id: string): Treatment | undefined {
  return treatments.find((t) => t.id === id);
}
