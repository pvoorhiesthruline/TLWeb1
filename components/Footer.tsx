import { ThrulineLockup } from './Logo'

const footerLinks = {
  Practice: ['Evaluation', 'AI Agents', 'Change Management'],
  Company: ['About', 'Research', 'Contact'],
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink-deep)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 32px 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row */}
        <div
          className="footer-top"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            marginBottom: 56,
            alignItems: 'start',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 400 }}>
            <ThrulineLockup size={22} reversed />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'rgba(250,250,247,0.45)',
                marginTop: 16,
                maxWidth: 320,
              }}
            >
              The throughline between research, practice, and outcome. An R&D firm for
              practitioners at the front edge.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links" style={{ display: 'flex', gap: 64 }}>
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(250,250,247,0.35)',
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  {group}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="footer-link"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 14,
                          color: 'rgba(250,250,247,0.55)',
                          textDecoration: 'none',
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(250,250,247,0.28)',
            }}
          >
            © {new Date().getFullYear()} Thruline Design · thrulinedesign.co
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(250,250,247,0.28)',
            }}
          >
            Brand pack v1.0 · May 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
