import { ThrulineMark } from './Logo'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: 'var(--paper-warm)',
        borderBottom: '1px solid var(--rule)',
        padding: '96px 32px 112px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100svh - 64px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Dot grid background */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--veri-peri)" opacity="0.10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Soft radial glow top-right */}
      <div
        style={{
          position: 'absolute',
          top: -240,
          right: -240,
          width: 800,
          height: 800,
          background: 'radial-gradient(circle at center, rgba(167,139,250,0.28) 0%, rgba(167,139,250,0) 62%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Subtle horizontal throughline echo */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '38%',
          height: 1,
          background: 'linear-gradient(to right, transparent 0%, rgba(107,79,216,0.20) 15%, rgba(107,79,216,0.20) 85%, transparent 100%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Watermark mark — bottom right */}
      <div
        style={{ position: 'absolute', right: -80, bottom: -120, opacity: 0.055, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <ThrulineMark size={540} primary="var(--veri-peri)" accent="var(--veri-peri)" />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        {/* Kicker */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--veri-peri)',
            fontWeight: 500,
            marginBottom: 36,
          }}
        >
          // Evaluation · AI Agents · Change Management
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 7vw, 88px)',
            fontWeight: 600,
            letterSpacing: '-0.030em',
            color: 'var(--ink)',
            lineHeight: 1.01,
            maxWidth: 900,
            margin: '0 0 28px',
          }}
        >
          The throughline between research, practice, and outcome.
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 400,
            lineHeight: 1.55,
            color: 'rgba(11,18,32,0.68)',
            maxWidth: 560,
            margin: '0 0 52px',
          }}
        >
          Agents and workshops built for the realities of corporate change. Evidence-led,
          human-anchored, technology-forward.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="#contact"
            className="hero-cta-primary"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--paper)',
              background: 'var(--veri-peri)',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Engage with us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#practice"
            className="hero-cta-secondary"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--ink)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0.72,
            }}
          >
            Explore our work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2l5 5-5 5M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            marginTop: 80,
            paddingTop: 40,
            borderTop: '1px solid var(--rule)',
          }}
        >
          {[
            { value: 'R&D Firm', label: 'Built for practitioners' },
            { value: 'AI-native', label: 'Agents + human judgment' },
            { value: 'Evidence-led', label: 'Evaluation baked in' },
          ].map(({ value, label }) => (
            <div key={value}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 4,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: 'rgba(11,18,32,0.5)',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
