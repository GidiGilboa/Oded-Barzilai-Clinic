/** Path under /public/images, plus alt text in both locales. */
export interface GalleryImage {
  src: string;
  alt: { he: string; en: string };
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/IMG_3872.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3918.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3932.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3945.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3967.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3970.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3977.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3985.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/IMG_3991.JPG", alt: { he: "תמונה מהמרפאה", en: "Photo from the clinic" } },
  { src: "/images/inWork.JPG", alt: { he: "ד״ר ברזילי בעבודה", en: "Dr. Barzilai at work" } },
  { src: "/images/room2.JPG", alt: { he: "חדר טיפולים במרפאה", en: "A treatment room at the clinic" } },
];
