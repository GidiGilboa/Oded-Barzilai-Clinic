"use server";

import type { ContactFormState } from "@/lib/actions/contact-types";

// A permissive check — real-world phone formatting varies (spaces, dashes,
// leading +972, etc). We only reject obviously invalid input.
const PHONE_PATTERN = /^[0-9+\-\s()]{7,20}$/;

/**
 * Handles the appointment/contact form submission.
 *
 * NOTE: This does not yet send the request anywhere. It validates the
 * input and reports success so the UI can be built and tested end to end.
 * Wire this up to a real destination (email, CRM, WhatsApp Business API,
 * Formspree, Supabase, etc.) once the clinic decides how it wants to
 * receive appointment requests. No personal data is persisted here.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name) {
    fieldErrors.name = "required";
  }

  if (!phone) {
    fieldErrors.phone = "required";
  } else if (!PHONE_PATTERN.test(phone)) {
    fieldErrors.phone = "invalid";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  // Placeholder for the real integration. Intentionally does nothing yet.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return { status: "success", fieldErrors: {} };
}
