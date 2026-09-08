"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import type { ContactFormDictionary } from "@/lib/dictionary-types";
import { submitContactForm } from "@/lib/actions/contact";
import { initialContactFormState } from "@/lib/actions/contact-types";
import { ActionButton, LinkButton } from "@/components/Button";
import { clinic } from "@/content/shared/clinic";
import { emailjsConfig } from "@/lib/emailjs-config";

interface SubmittedValues {
  name: string;
  phone: string;
  message: string;
}

function buildMailtoHref(subject: string, values: SubmittedValues) {
  const bodyLines = [`${values.name}`, values.phone, "", values.message].filter(Boolean);
  const params = new URLSearchParams({
    subject,
    body: bodyLines.join("\n"),
  });
  return `mailto:${clinic.email}?${params.toString()}`;
}

type SendStatus = "idle" | "sending" | "sent" | "failed";

export function ContactForm({ form }: { form: ContactFormDictionary }) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState
  );
  const [submittedValues, setSubmittedValues] = useState<SubmittedValues | null>(null);
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");
  const hasSentEmail = useRef(false);

  const nameId = useId();
  const phoneId = useId();
  const messageId = useId();
  const nameErrorId = useId();
  const phoneErrorId = useId();

  async function handleAction(formData: FormData) {
    setSubmittedValues({
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    });
    await formAction(formData);
  }

  const mailtoHref = submittedValues ? buildMailtoHref(form.emailSubject, submittedValues) : null;

  useEffect(() => {
    if (state.status !== "success" || !submittedValues || hasSentEmail.current) return;
    hasSentEmail.current = true;
    setSendStatus("sending");
    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: submittedValues.name,
          phone: submittedValues.phone,
          message: submittedValues.message,
        },
        { publicKey: emailjsConfig.publicKey }
      )
      .then(() => setSendStatus("sent"))
      .catch(() => setSendStatus("failed"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  if (sendStatus === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 border border-border bg-surface p-8">
        <div>
          <h2 className="text-lg font-medium text-text">{form.successTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{form.successBody}</p>
        </div>
      </div>
    );
  }

  if (sendStatus === "failed") {
    return (
      <div role="alert" className="flex flex-col items-start gap-4 border border-danger/40 bg-surface p-8">
        <div>
          <h2 className="text-lg font-medium text-text">{form.errorTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{form.errorBody}</p>
        </div>
        {mailtoHref && (
          <LinkButton href={mailtoHref} variant="secondary">
            {form.emailFallbackCta}
          </LinkButton>
        )}
      </div>
    );
  }

  return (
    <form action={handleAction} noValidate className="flex flex-col gap-5">
      {state.status === "error" && Object.keys(state.fieldErrors).length === 0 && (
        <div role="alert" className="border border-danger/40 bg-surface p-4 text-sm text-danger">
          <p className="font-medium">{form.errorTitle}</p>
          <p>{form.errorBody}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor={nameId} className="text-sm font-medium text-text">
          {form.name}
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder={form.namePlaceholder}
          aria-invalid={Boolean(state.fieldErrors.name)}
          aria-describedby={state.fieldErrors.name ? nameErrorId : undefined}
          className="min-h-11 border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-secondary/70"
        />
        {state.fieldErrors.name && (
          <p id={nameErrorId} className="text-sm text-danger">
            {form.requiredError}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={phoneId} className="text-sm font-medium text-text">
          {form.phone}
        </label>
        <input
          id={phoneId}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder={form.phonePlaceholder}
          aria-invalid={Boolean(state.fieldErrors.phone)}
          aria-describedby={state.fieldErrors.phone ? phoneErrorId : undefined}
          className="min-h-11 border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-secondary/70"
        />
        {state.fieldErrors.phone && (
          <p id={phoneErrorId} className="text-sm text-danger">
            {state.fieldErrors.phone === "invalid" ? form.invalidPhoneError : form.requiredError}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-sm font-medium text-text">
          {form.message} <span className="text-text-secondary">({form.messageOptional})</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          placeholder={form.messagePlaceholder}
          className="border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-secondary/70"
        />
      </div>

      <p className="text-xs leading-relaxed text-text-secondary">{form.privacyNote}</p>

      <ActionButton
        type="submit"
        variant="primary"
        disabled={isPending || sendStatus === "sending"}
        aria-busy={isPending || sendStatus === "sending"}
        className="self-start"
      >
        {isPending || sendStatus === "sending" ? form.submitting : form.submit}
      </ActionButton>
    </form>
  );
}
