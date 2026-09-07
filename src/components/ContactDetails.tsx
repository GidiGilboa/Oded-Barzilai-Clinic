import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary-types";
import { clinic, openingHours } from "@/content/shared/clinic";
import { getPhoneHref, getWhatsappHref } from "@/lib/contact-links";
import { LinkButton } from "@/components/Button";
import { ClinicMap } from "@/components/ClinicMap";
import { hasGoogleMapsApiKey } from "@/lib/maps-config";

export function ContactDetails({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const isHe = locale === "he";
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref(locale);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="mb-4 text-lg font-medium text-text">{dict.contact.detailsTitle}</h2>
        <dl className="flex flex-col gap-4 text-[0.95rem]">
          <div className="flex flex-col gap-1">
            <dt className="text-text-secondary">{dict.common.address}</dt>
            <dd className="text-text">
              {dict.common.addressValue}
              <br />
              {isHe ? clinic.countryHe : clinic.countryEn}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-text-secondary">{dict.common.phone}</dt>
            <dd className="text-text">{clinic.phoneDisplay}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-text-secondary">{dict.common.emergencyPhone}</dt>
            <dd className="text-text">{clinic.emergencyPhoneDisplay}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-text-secondary">{dict.common.email}</dt>
            <dd className="text-text">{clinic.email}</dd>
          </div>
        </dl>
      </div>

      <div id="whatsapp" className="flex flex-col gap-3 scroll-mt-24 sm:flex-row sm:flex-wrap">
        {phoneHref ? (
          <LinkButton href={phoneHref} variant="primary">
            {dict.common.callNow}
          </LinkButton>
        ) : (
          <LinkButton href="#contact-form" variant="primary">
            {dict.common.callNow}
          </LinkButton>
        )}
        <LinkButton href={whatsappHref} variant="secondary">
          {dict.common.writeOnWhatsapp}
        </LinkButton>
        <LinkButton href={`mailto:${clinic.email}`} variant="secondary">
          {dict.common.emailUs}
        </LinkButton>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-medium text-text">{dict.contact.hoursTitle}</h2>
        <table className="w-full max-w-sm border-collapse text-[0.95rem]">
          <caption className="sr-only">{dict.contact.hoursTitle}</caption>
          <tbody>
            {openingHours.map((row) => (
              <tr key={row.daysEn} className="border-t border-border first:border-t-0">
                <th scope="row" className="py-2 pe-4 text-start font-normal text-text-secondary">
                  {isHe ? row.daysHe : row.daysEn}
                </th>
                <td className="py-2 text-text">{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-medium text-text">{dict.contact.mapTitle}</h2>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
          {hasGoogleMapsApiKey ? (
            <ClinicMap
              latitude={clinic.geo.latitude}
              longitude={clinic.geo.longitude}
              title={isHe ? clinic.doctorNameHe : clinic.doctorNameEn}
            />
          ) : (
            <iframe
              src={clinic.mapsEmbedUrl}
              title={dict.contact.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          )}
        </div>
        <LinkButton href={clinic.mapsLinkUrl} variant="ghost" className="mt-3 px-0">
          {dict.contact.mapCta}
        </LinkButton>
      </div>
    </div>
  );
}
