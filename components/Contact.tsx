'use client'

import { useState } from 'react'

const interests = ['Evaluation', 'AI Agents', 'Change Management', 'R&D Partnership']

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setFormError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      interests: selected,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      // Safely parse JSON — guard against empty or non-JSON responses
      let json: { error?: string; success?: boolean } = {}
      try {
        json = await res.json()
      } catch {
        // response had no body
      }

      if (!res.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'rgba(250,250,247,0.88)',
    background: 'rgba(250,250,247,0.08)',
    border: '1px solid rgba(255,255,255,0.16)',
    borderRadius: 8,
    outline: 'none',
    transition: 'border-color 0.15s, background 0.15s',
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--paper-dark)',
        padding: '112px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 600,
          background:
            'radial-gradient(ellipse at center, rgba(107,79,216,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 18,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--periwinkle)',
              fontWeight: 500,
            }}
          >
            03 · Engage
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--rule-dark)' }} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 600,
            letterSpacing: '-0.028em',
            color: 'var(--paper)',
            lineHeight: 1.03,
            marginBottom: 16,
          }}
        >
          Start a conversation.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            lineHeight: 1.6,
            color: 'rgba(250,250,247,0.60)',
            marginBottom: 52,
            maxWidth: 520,
          }}
        >
          Tell us what you&apos;re working on. We&apos;ll respond within two business days.
        </p>

        {submitted ? (
          <div
            style={{
              background: 'rgba(14,107,94,0.15)',
              border: '1px solid rgba(16,185,129,0.30)',
              borderRadius: 12,
              padding: '40px 36px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(16,185,129,0.20)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M4 11l5 5 9-9"
                  stroke="var(--neo-mint)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: 'var(--paper)',
                marginBottom: 10,
              }}
            >
              Message received.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                color: 'rgba(250,250,247,0.60)',
                lineHeight: 1.55,
              }}
            >
              We&apos;ll be in touch within two business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Name + Email row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(250,250,247,0.55)',
                    fontWeight: 500,
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="contact-field"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--periwinkle)'
                    e.target.style.background = 'rgba(250,250,247,0.12)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.16)'
                    e.target.style.background = 'rgba(250,250,247,0.08)'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(250,250,247,0.55)',
                    fontWeight: 500,
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@organization.com"
                  className="contact-field"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--periwinkle)'
                    e.target.style.background = 'rgba(250,250,247,0.12)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.16)'
                    e.target.style.background = 'rgba(250,250,247,0.08)'
                  }}
                />
              </div>
            </div>

            {/* Organization */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                htmlFor="org"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,247,0.55)',
                  fontWeight: 500,
                }}
              >
                Organization
              </label>
              <input
                id="org"
                name="organization"
                type="text"
                placeholder="Where you work"
                className="contact-field"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--periwinkle)'
                  e.target.style.background = 'rgba(250,250,247,0.12)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)'
                  e.target.style.background = 'rgba(250,250,247,0.08)'
                }}
              />
            </div>

            {/* Interests */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,247,0.55)',
                  fontWeight: 500,
                }}
              >
                I&apos;m interested in
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {interests.map((item) => {
                  const isActive = selected.includes(item)
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggle(item)}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        fontWeight: 500,
                        color: isActive ? 'var(--paper)' : 'rgba(250,250,247,0.65)',
                        background: isActive ? 'var(--veri-peri)' : 'rgba(250,250,247,0.06)',
                        border: `1px solid ${isActive ? 'var(--veri-peri)' : 'rgba(255,255,255,0.14)'}`,
                        padding: '8px 16px',
                        borderRadius: 999,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                htmlFor="message"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,247,0.55)',
                  fontWeight: 500,
                }}
              >
                What are you working on?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about the challenge you're navigating..."
                className="contact-field"
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.55 }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--periwinkle)'
                  e.target.style.background = 'rgba(250,250,247,0.12)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)'
                  e.target.style.background = 'rgba(250,250,247,0.08)'
                }}
              />
            </div>

            {/* Error banner */}
            {formError && (
              <div
                role="alert"
                style={{
                  background: 'rgba(209,74,74,0.15)',
                  border: '1px solid rgba(209,74,74,0.35)',
                  borderRadius: 8,
                  padding: '12px 16px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: '#FCA5A5',
                  lineHeight: 1.5,
                }}
              >
                {formError}
              </div>
            )}

            {/* Submit */}
            <div style={{ paddingTop: 4 }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--paper)',
                  background: loading ? 'rgba(107,79,216,0.6)' : 'var(--veri-peri)',
                  padding: '14px 32px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  letterSpacing: '-0.01em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'background 0.15s, transform 0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    const el = e.currentTarget
                    el.style.background = '#5A40C4'
                    el.style.transform = 'translateY(-1px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    const el = e.currentTarget
                    el.style.background = 'var(--veri-peri)'
                    el.style.transform = 'translateY(0)'
                  }
                }}
              >
                {loading ? 'Sending…' : 'Send message'}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(250,250,247,0.30);
        }
        input, textarea {
          color-scheme: dark;
        }
      `}</style>
    </section>
  )
}
