import { useId, useState } from 'react'

type FormState = {
  name: string
  email: string
  subject: string
  reason: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const ContactForm = () => {
  const idPrefix = useId()
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    reason: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Bitte Namen angeben.'
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = 'Bitte gültige E-Mail angeben.'
    if (!form.subject.trim()) newErrors.subject = 'Bitte Betreff angeben.'
    if (!form.message.trim()) newErrors.message = 'Bitte Nachricht ausfüllen.'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[field]
        return copy
      })
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const isValid = validate()
    
    if (!isValid) {
      event.preventDefault()
      return
    }
    // Wenn valid, erfolgt der Standard-Submit an Netlify (POST an /danke)
  }

  return (
    <form
      className="space-y-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
      name="kontakt"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/danke"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="kontakt" />
      <p className="hidden">
        <label>
          Bitte dieses Feld frei lassen: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm text-stone-700" htmlFor={`${idPrefix}-name`}>
          <span>Name *</span>
          <input
            id={`${idPrefix}-name`}
            name="name"
            value={form.name}
            onChange={handleChange('name')}
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            placeholder="Vor- und Nachname"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
          />
          {errors.name && (
            <p id={`${idPrefix}-name-error`} className="text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </label>
        <label className="space-y-1 text-sm text-stone-700" htmlFor={`${idPrefix}-email`}>
          <span>E-Mail *</span>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            placeholder="Ihre E-Mail-Adresse"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
          />
          {errors.email && (
            <p id={`${idPrefix}-email-error`} className="text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </label>
      </div>

      <label className="space-y-1 text-sm text-stone-700" htmlFor={`${idPrefix}-subject`}>
        <span>Betreff *</span>
        <input
          id={`${idPrefix}-subject`}
          name="subject"
          value={form.subject}
          onChange={handleChange('subject')}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          placeholder="Worum geht es?"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? `${idPrefix}-subject-error` : undefined}
        />
        {errors.subject && (
          <p id={`${idPrefix}-subject-error`} className="text-xs text-red-600">
            {errors.subject}
          </p>
        )}
      </label>

      <label className="space-y-1 text-sm text-stone-700" htmlFor={`${idPrefix}-reason`}>
        <span>Anliegen (optional)</span>
        <select
          id={`${idPrefix}-reason`}
          name="reason"
          value={form.reason}
          onChange={handleChange('reason')}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        >
          <option value="" disabled>
            Bitte auswählen
          </option>
          <option value="anfrage">Allgemeine Anfrage</option>
          <option value="kostenvoranschlag">Kostenvoranschlag</option>
          <option value="termin">Terminwunsch</option>
          <option value="bewerbung">Bewerbung</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </label>

      <label className="space-y-1 text-sm text-stone-700" htmlFor={`${idPrefix}-message`}>
        <span>Nachricht *</span>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          value={form.message}
          onChange={handleChange('message')}
          rows={5}
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          placeholder="Wie können wir Ihnen helfen?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
        />
        {errors.message && (
          <p id={`${idPrefix}-message-error`} className="text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </label>

      <div className="rounded-lg bg-stone-50 p-3 text-xs text-stone-600">
        Ihre Anfrage wird sicher übermittelt. Wir melden uns in der Regel innerhalb von 1–2 Werktagen bei Ihnen.
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-secondary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 active:bg-secondary-700"
      >
        Nachricht senden
      </button>
    </form>
  )
}

export default ContactForm
