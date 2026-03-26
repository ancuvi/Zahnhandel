import { useId, useState } from 'react'
import { Send, User, Mail, MessageSquare, Tag, FileText } from 'lucide-react'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Bitte Namen angeben.'
    if (form.name.length < 2) newErrors.name = 'Der Name ist zu kurz.'
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = 'Bitte gültige E-Mail angeben.'
    if (!form.subject.trim()) newErrors.subject = 'Bitte Betreff angeben.'
    if (form.message.trim().length < 10) newErrors.message = 'Die Nachricht ist zu kurz (min. 10 Zeichen).'
    
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitStatus('idle')
    setStatusMessage('')

    const isValid = validate()
    
    if (!isValid) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage(result.message || 'Ihre Nachricht wurde erfolgreich gesendet.')
        // Formular zurücksetzen
        setForm({ name: '', email: '', subject: '', reason: '', message: '' })
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.error || 'Fehler beim Senden. Bitte versuchen Sie es später erneut.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setStatusMessage('Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 pl-11 text-sm text-primary-900 placeholder:text-stone-400 shadow-sm outline-none transition-all duration-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
  const labelClasses = "block text-sm font-medium text-primary-700 mb-1.5"
  const iconClasses = "absolute left-3.5 top-3.5 h-5 w-5 text-stone-400"

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      
      {/* Bot-Schutz Honeypot */}
      <p className="hidden" aria-hidden="true">
        <label>
          Bitte dieses Feld frei lassen: 
          <input 
            name="bot-field" 
            autoComplete="off" 
            onChange={(e) => setForm(f => ({...f, 'bot-field': e.target.value} as any))} 
          />
        </label>
      </p>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-center gap-3 animate-fade-in mb-6">
          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0">✓</div>
          <p className="text-sm font-medium">{statusMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-center gap-3 animate-fade-in mb-6">
          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shrink-0">!</div>
          <p className="text-sm font-medium">{statusMessage}</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor={`${idPrefix}-name`}>
            Name *
          </label>
          <div className="relative">
            <User className={iconClasses} />
            <input
              id={`${idPrefix}-name`}
              name="name"
              value={form.name}
              onChange={handleChange('name')}
              className={inputClasses}
              placeholder="Ihr Vor- und Nachname"
              aria-invalid={!!errors.name}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 animate-slide-up">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={labelClasses} htmlFor={`${idPrefix}-email`}>
            E-Mail *
          </label>
          <div className="relative">
             <Mail className={iconClasses} />
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              className={inputClasses}
              placeholder="ihre@email.de"
              aria-invalid={!!errors.email}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 animate-slide-up">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor={`${idPrefix}-reason`}>
          Anliegen
        </label>
        <div className="relative">
           <Tag className={iconClasses} />
            <select
              id={`${idPrefix}-reason`}
              name="reason"
              value={form.reason}
              onChange={handleChange('reason')}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled>Bitte wählen Sie ein Thema</option>
              <option value="anfrage">Allgemeine Anfrage</option>
              <option value="kostenvoranschlag">Kostenvoranschlag</option>
              <option value="termin">Terminwunsch</option>
              <option value="bewerbung">Bewerbung</option>
              <option value="sonstiges">Sonstiges</option>
            </select>
             <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary-600">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor={`${idPrefix}-subject`}>
          Betreff *
        </label>
         <div className="relative">
            <FileText className={iconClasses} />
            <input
              id={`${idPrefix}-subject`}
              name="subject"
              value={form.subject}
              onChange={handleChange('subject')}
              className={inputClasses}
              placeholder="Kurze Zusammenfassung"
              aria-invalid={!!errors.subject}
            />
        </div>
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600 animate-slide-up">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label className={labelClasses} htmlFor={`${idPrefix}-message`}>
          Nachricht *
        </label>
         <div className="relative">
            <MessageSquare className={`${iconClasses} top-4`} />
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              value={form.message}
              onChange={handleChange('message')}
              rows={5}
              className={`${inputClasses} py-3.5`}
              placeholder="Wie können wir Ihnen helfen?"
              aria-invalid={!!errors.message}
            />
        </div>
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 animate-slide-up">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
         <p className="text-xs text-primary-600 max-w-xs">
           Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten einverstanden.
         </p>
         <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-secondary-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-secondary-500/40 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 disabled:opacity-70"
          >
            <span>{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}</span>
            {!isSubmitting && <Send size={18} className="transition-transform group-hover:translate-x-1" />}
          </button>
      </div>
    </form>
  )
}

export default ContactForm
