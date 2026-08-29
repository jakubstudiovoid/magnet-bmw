import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Check, Copy, MessageSquare, Phone } from "lucide-react";
import { SERVICES, SITE, smsHref, telHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  phone: string;
  model: string;
  service: string;
  message: string;
};

const empty: Values = {
  name: "",
  phone: "",
  model: "",
  service: SERVICES[0]?.title ?? "",
  message: "",
};

function buildMessage(values: Values) {
  return [
    "Dobrý den, rád/a bych objednal/a termín v MAGNET BMW.",
    `Jméno: ${values.name}`,
    `Telefon: ${values.phone}`,
    values.model ? `Vůz: ${values.model}` : null,
    `Služba: ${values.service}`,
    values.message ? `Poznámka: ${values.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const sms = useMemo(() => (done ? smsHref(buildMessage(values)) : "#"), [done, values]);

  function validate(next: Values) {
    const nextErrors: Partial<Values> = {};
    if (next.name.trim().length < 2) nextErrors.name = "Uveďte jméno";
    if (next.phone.replace(/\s/g, "").length < 9) nextErrors.phone = "Uveďte telefon";
    if (!next.service) nextErrors.service = "Vyberte službu";
    return nextErrors;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setDone(true);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(buildMessage(values));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-xl bg-elevated p-6 shadow-border md:p-8">
        <p className="text-xs tracking-[0.22em] text-accent uppercase">Poptávka připravena</p>
        <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
          Teď stačí zavolat
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Shrnutí máte připravené. Nejjistější cesta k termínu je telefon — v dílně se vám
          ozve člověk, ne automat.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-lg bg-bg p-4 text-sm leading-relaxed text-fg/90">
          {buildMessage(values)}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent">
            <a href={telHref()}>
              <Phone className="size-4" />
              Zavolat {SITE.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={sms}>
              <MessageSquare className="size-4" />
              Odeslat SMS
            </a>
          </Button>
          <Button type="button" variant="ghost" onClick={copySummary}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Zkopírováno" : "Kopírovat"}
          </Button>
        </div>
        <button
          type="button"
          className="mt-6 text-sm text-muted nav-link"
          onClick={() => {
            setDone(false);
            setValues(empty);
          }}
        >
          Odeslat další poptávku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-5", compact && "gap-4")} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Jméno" error={errors.name}>
          <Input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            placeholder="Jan Novák"
          />
        </Field>
        <Field label="Telefon" error={errors.phone}>
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            placeholder="+420 …"
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Vůz BMW">
          <Input
            name="model"
            value={values.model}
            onChange={(e) => setValues((v) => ({ ...v, model: e.target.value }))}
            placeholder="např. 530d F10 / G30"
          />
        </Field>
        <Field label="Služba" error={errors.service}>
          <select
            name="service"
            value={values.service}
            onChange={(e) => setValues((v) => ({ ...v, service: e.target.value }))}
            className="h-12 w-full rounded-lg bg-elevated px-4 text-base text-fg shadow-border outline-none transition-[box-shadow] duration-150 hover:shadow-border-hover focus:ring-2 focus:ring-accent"
          >
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Jiné / kombinace">Jiné / kombinace</option>
          </select>
        </Field>
      </div>
      <Field label="Poznámka">
        <Textarea
          name="message"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          placeholder="Co vůz dělá, kdy se vám hodí termín…"
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg">
          Připravit poptávku
        </Button>
        <p className="text-xs leading-relaxed text-subtle">
          Nic neodesíláme na server. Shrnutí vám složíme tady a termín potvrdíme telefonem.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-accent">{error}</p> : null}
    </div>
  );
}
