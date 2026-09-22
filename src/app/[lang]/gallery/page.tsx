import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { galleryImages } from "@/content/shared/gallery";
import { JsonLd } from "@/components/JsonLd";
import { GoldEmblemWatermark } from "@/components/GoldEmblemWatermark";

export async function generateMetadata(props: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "gallery",
    title: dict.gallery.meta.title,
    description: dict.gallery.meta.description,
  });
}

export default async function GalleryPage(props: PageProps<"/[lang]/gallery">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  const isHe = locale === "he";

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.gallery, path: "gallery" },
        ])}
      />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <GoldEmblemWatermark side="end" size="sm" />
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-14 md:py-20 md:px-10">
          <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{dict.gallery.title}</h1>
          <p className="prose-measure text-lg leading-relaxed text-text-secondary">{dict.gallery.intro}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 px-6 py-16 md:grid-cols-3 md:gap-6 md:px-10 md:py-20">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square w-full overflow-hidden rounded-sm bg-surface-muted"
            >
              <Image
                src={image.src}
                alt={isHe ? image.alt.he : image.alt.en}
                fill
                sizes="(min-width: 768px) 360px, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
