'use client'

import { useState } from 'react'
import { ThrulineLockup } from './Logo'

const links = ['Practice', 'Research', 'Agents', 'About']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(250,250,247,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Thruline Design — home"
          style={{ textDecoration: 'none', display: 'flex' }}
        >
          <ThrulineLockup size={20} />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 28 }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                color: 'rgba(11,18,32,0.72)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--paper)',
              background: 'var(--veri-peri)',
              padding: '8px 18px',
              borderRadius: 999,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            Engage
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            color: 'var(--ink)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: '1px solid var(--rule)',
            padding: '16px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--ink)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--paper)',
              background: 'var(--veri-peri)',
              padding: '12px 20px',
              borderRadius: 999,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: 12,
            }}
          >
            Engage
          </a>
        </div>
      )}
    </header>
  )
}
