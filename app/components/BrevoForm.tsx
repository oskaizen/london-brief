'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'

const BREVO_FORM_ACTION =
  'https://601fb65b.sibforms.com/serve/MUIFAOhcZQjee0B8BG1cSJtm9SQrdDebe3PTtrlAPTDBHU2quDIqX7KNdX9DQeNMymg1CTLobpcI_8tQkE1Xk9G6j45NpnZNH_uMSLTNk0ZTSoVSns42nV1bUO6xutAS3luH0Gwp8q1bibXy6gktIGrTBsTLYc6AC5WYYtqCN3bwoDTWasp4gzTJFbiN5OYuGmlCMEqW2Lgx5tsv'

const RECAPTCHA_SITE_KEY = '6LcTF5UqAAAAAJLPBJazuUwWYnr0wqdTdPojs0fV'
const RECAPTCHA_SCRIPT_ID = 'brevo-recaptcha-script'

type BrevoResponse = {
  success?: boolean
  message?: string
  errors?: Record<string, string>
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      render: (
        container: HTMLElement,
        options: { sitekey: string; callback?: () => void }
      ) => number
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
    }
    onBrevoRecaptchaLoad?: () => void
  }
}

function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve) => {
    const finish = () => window.grecaptcha!.ready(() => resolve())

    if (window.grecaptcha) {
      finish()
      return
    }

    if (!document.getElementById(RECAPTCHA_SCRIPT_ID)) {
      window.onBrevoRecaptchaLoad = finish

      const script = document.createElement('script')
      script.id = RECAPTCHA_SCRIPT_ID
      script.src =
        'https://www.google.com/recaptcha/api.js?render=explicit&onload=onBrevoRecaptchaLoad'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
      return
    }

    const interval = window.setInterval(() => {
      if (window.grecaptcha) {
        window.clearInterval(interval)
        finish()
      }
    }, 100)
  })
}

export default function BrevoForm() {
  const captchaRef = useRef<HTMLDivElement>(null)
  const captchaWidgetId = useRef<number | null>(null)

  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let cancelled = false

    loadRecaptchaScript().then(() => {
      if (cancelled || !captchaRef.current || captchaWidgetId.current !== null) return

      captchaWidgetId.current = window.grecaptcha!.render(captchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')

    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }

    if (!optIn) {
      setStatus('error')
      setMessage('Please accept the privacy statement to subscribe.')
      return
    }

    const captchaResponse =
      captchaWidgetId.current !== null
        ? window.grecaptcha?.getResponse(captchaWidgetId.current)
        : ''

    if (!captchaResponse) {
      setStatus('error')
      setMessage('Please complete the CAPTCHA.')
      return
    }

    setStatus('loading')

    const formData = new FormData()
    formData.append('EMAIL', email.trim())
    formData.append('OPT_IN', '1')
    formData.append('email_address_check', '')
    formData.append('locale', 'en')
    formData.append('g-recaptcha-response', captchaResponse)

    try {
      const response = await fetch(`${BREVO_FORM_ACTION}?isAjax=1`, {
        method: 'POST',
        body: formData,
      })

      const data: BrevoResponse = JSON.parse(await response.text())

      if (data.success) {
        setStatus('success')
        setMessage(data.message || 'Your subscription has been successful.')
        setEmail('')
        setOptIn(false)
        if (captchaWidgetId.current !== null) {
          window.grecaptcha?.reset(captchaWidgetId.current)
        }
        return
      }

      setStatus('error')
      setMessage(
        data.message ||
          Object.values(data.errors ?? {})[0] ||
          'Your subscription could not be saved. Please try again.'
      )
      if (captchaWidgetId.current !== null) {
        window.grecaptcha?.reset(captchaWidgetId.current)
      }
    } catch {
      setStatus('error')
      setMessage('Your subscription could not be saved. Please try again.')
      if (captchaWidgetId.current !== null) {
        window.grecaptcha?.reset(captchaWidgetId.current)
      }
    }
  }

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6 text-left shadow-sm">
      <p className="mb-1 text-sm font-bold text-gray-700">The London Brief</p>
      <p className="mb-6 text-xs text-gray-600">
        I talk about things I see that can move markets. Subscribe to learn with me.
      </p>

      {status === 'success' && (
        <div className="mb-4 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
          {message}
        </div>
      )}

      {status === 'error' && message && (
        <div className="mb-4 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            type="email"
            id="EMAIL"
            name="EMAIL"
            autoComplete="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === 'loading'}
            required
          />
          <p className="mt-1 text-xs text-gray-500">Provide your email address to subscribe.</p>
        </div>

        <label className="flex items-start gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            id="OPT_IN"
            name="OPT_IN"
            checked={optIn}
            onChange={(event) => setOptIn(event.target.checked)}
            disabled={status === 'loading'}
            className="mt-1"
          />
          <span>
            I agree to receive your newsletters and accept the data privacy statement.
          </span>
        </label>

        <div ref={captchaRef} className="flex justify-center" />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-md bg-gray-700 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Subscribing...' : 'SUBSCRIBE'}
        </button>
      </form>
    </div>
  )
}
