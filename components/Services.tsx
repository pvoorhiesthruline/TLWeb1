const services = [
  {
    num: '01',
    kicker: 'Evaluation',
    title: 'Measurement built into the work.',
    body: 'We design evaluation frameworks that thread through your change initiative from day one — not bolted on at the end. Mixed-methods, rigorous, and built for real organizational timelines.',
    accent: '#0E6B5E',
    accentLight: 'rgba(14,107,94,0.08)',
    tags: ['Logic models', 'Survey design', 'Outcome tracking'],
  },
  {
    num: '02',
    kicker: 'AI Agents',
    title: 'Purpose-built agents for practice.',
    body: 'Custom agents that augment workshop facilitation, research synthesis, and stakeholder analysis. Built to your context, not general-purpose. Deployed alongside your people, not instead of them.',
    accent: '#6B4FD8',
    accentLight: 'rgba(107,79,216,0.08)',
    tags: ['Workshop agents', 'Synthesis tools', 'Coaching assistants'],
  },
  {
    num: '03',
    kicker: 'Change Management',
    title: 'Coaching at the front edge.',
    body: 'Working with practitioners navigating AI deployment in corporate environments. We bring the research and the rigor — equipping teams to lead change that actually holds.',
    accent: '#2D5BE3',
    accentLight: 'rgba(45,91,227,0.08)',
    tags: ['Leadership coaching', 'Team enablement', 'Adoption strategy'],
  },
]

export default function Services() {
  return (
    <section
      id="practice"
      style={{
        background: 'var(--paper)',
        borderBottom: '1px solid var(--rule)',
        padding: '112px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 20 }}>
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
              01 · Practice
            </span>
            <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 600,
              letterSpacing: '-0.028em',
              color: 'var(--ink)',
              lineHeight: 1.03,
              maxWidth: 680,
            }}
          >
            Three disciplines, one throughline.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(11,18,32,0.65)',
              marginTop: 20,
              maxWidth: 560,
            }}
          >
            Evaluation, AI agents, and change management work best when they&apos;re integrated
            from the start. That&apos;s how we build.
          </p>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card"
              style={{
                background: 'var(--paper-warm)',
                borderRadius: 10,
                border: '1px solid var(--rule)',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              {/* Number + kicker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: s.accent,
                    fontWeight: 500,
                  }}
                >
                  {s.num} · {s.kicker}
                </span>
              </div>

              {/* Accent line */}
              <div
                style={{
                  width: 40,
                  height: 3,
                  borderRadius: 999,
                  background: s.accent,
                  opacity: 0.7,
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  fontWeight: 600,
                  letterSpacing: '-0.020em',
                  color: 'var(--ink)',
                  lineHeight: 1.15,
                }}
              >
                {s.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'rgba(11,18,32,0.7)',
                  flex: 1,
                }}
              >
                {s.body}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: s.accent,
                      background: s.accentLight,
                      padding: '4px 10px',
                      borderRadius: 4,
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
