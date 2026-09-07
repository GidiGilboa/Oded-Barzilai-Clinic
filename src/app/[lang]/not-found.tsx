import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-6 px-6 py-24 text-start md:px-10">
      <div>
        <h1 className="text-2xl font-semibold text-text">העמוד לא נמצא</h1>
        <p className="mt-2 text-text-secondary">יכול להיות שהקישור שגוי, או שהעמוד הועבר.</p>
        <Link href="/he" className="mt-4 inline-block text-accent-text underline underline-offset-4">
          חזרה לעמוד הבית
        </Link>
      </div>
      <div className="border-t border-border pt-6">
        <h2 className="text-xl font-semibold text-text">Page not found</h2>
        <p className="mt-2 text-text-secondary">The link may be incorrect, or the page may have moved.</p>
        <Link href="/en" className="mt-4 inline-block text-accent-text underline underline-offset-4">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
