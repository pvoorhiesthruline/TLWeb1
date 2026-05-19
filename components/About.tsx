import { ThrulineMark } from './Logo'

const principles = [
  {
    kicker: 'Thread first',
    body: 'Every engagement starts with a throughline — a clear theory of change that connects inputs to outcomes. No throughline, no engagement.',
  },
  {
    kicker: 'Evidence as practice',
    body: 'Evaluation isn\'t a report at the end. It\'s a continuous practice woven into how we work, facilitated, and measured.',
  },
  {
    kicker: 'Agents augment, not replace',
    body: 'We build AI agents that extend what practitioners can do — handling synthesis, surfacing patterns, drafting frameworks — while keeping human judgment at the center.',
  },
  {
    kicker: 'Change takes time',
    body: 'We design for sustained adoption, not launch-day headlines. That means building organizational capability, not just delivering outputs.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--paper-warm)',
        borderBottom: '1px solid var(--rule)',
        padding: '112px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 18,
            marginBottom: 72,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--veri-peri)',
              fontWeight: 500,
            }}
          >
            02 · About
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
        </div>

        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left — mark + statement */}
          <div>
            {/* Large mark display */}
            <div
              style={{
                background: 'var(--paper)',
                borderRadius: 12,
                border: '1px solid var(--rule)',
                padding: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 40,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle grid */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.4,
                }}
                aria-hidden="true"
              >
                <defs>
                  <pattern id="about-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="rgba(11,18,32,0.06)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-grid)" />
              </svg>
              <ThrulineMark size={160} primary="var(--veri-peri)" accent="var(--periwinkle)" />
            </div>

            {/* Brand statement */}
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 500,
                letterSpacing: '-0.022em',
                lineHeight: 1.2,
                color: 'var(--ink)',
                margin: 0,
                borderLeft: '3px solid var(--veri-peri)',
                paddingLeft: 24,
              }}
            >
              The connecting thread running through theory, implementation, and outcomes.
            </blockquote>
          </div>

          {/* Right — copy + principles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 600,
                  letterSpacing: '-0.025em',
                  color: 'var(--ink)',
                  lineHeight: 1.05,
                  marginBottom: 20,
                }}
              >
                R&D built for practitioners.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: 'rgba(11,18,32,0.7)',
                  marginBottom: 14,
                }}
              >
                Thruline Design is an R&D firm pairing AI agents and workshop practice with deep
                evaluation and change-management expertise. We work with organizations navigating
                the real complexity of AI deployment — where the research is still forming and the
                stakes are high.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: 'rgba(11,18,32,0.7)',
                }}
              >
                Our name is literal. We find and hold the throughline between what the evidence
                says and what teams can actually do — and we build the agents, frameworks, and
                coaching to make that connection durable.
              </p>
            </div>

            {/* Principles */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                borderTop: '1px solid var(--rule)',
              }}
            >
              {principles.map((p, i) => (
                <div
                  key={p.kicker}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '140px 1fr',
                    gap: 20,
                    padding: '20px 0',
                    borderBottom: i < principles.length - 1 ? '1px solid var(--rule)' : 'none',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--forest-teal)',
                      fontWeight: 500,
                    }}
                  >
                    {p.kicker}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: 'rgba(11,18,32,0.72)',
                    }}
                  >
                    {p.body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
