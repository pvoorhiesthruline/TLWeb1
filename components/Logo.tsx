// Thruline Design logo components — ported from brand kit
// Geometry: bowed crossbar (quadratic curve) + T stem + accent terminus dot

interface MarkProps {
  size?: number
  primary?: string
  accent?: string
}

interface LockupProps {
  size?: number
  color?: string
  primary?: string
  accent?: string
  reversed?: boolean
}

export function ThrulineMark({
  size = 56,
  primary = '#6B4FD8',
  accent = '#A78BFA',
}: MarkProps) {
  const barY = 22
  const barH = 8.74
  const arcLift = 4.18
  const startX = 10.27
  const endX = 89.03
  const midX = (startX + endX) / 2
  const stemX = 75.65
  const stemW = 10.26
  const dotR = 8.74
  const t = (stemX - startX) / (endX - startX)
  const yAtStem = barY - 4 * arcLift * t * (1 - t)
  const stemTop = yAtStem - barH / 2

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Thruline Design mark"
      style={{ display: 'block' }}
    >
      <path
        d={`M ${startX} ${barY} Q ${midX} ${barY - 2 * arcLift}, ${endX} ${barY}`}
        stroke={primary}
        strokeWidth={barH}
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x={stemX - stemW / 2}
        y={stemTop}
        width={stemW}
        height={90 - stemTop}
        rx={stemW / 2}
        fill={primary}
      />
      <circle cx={startX} cy={barY} r={dotR} fill={accent} />
    </svg>
  )
}

export function ThrulineLockup({
  size = 48,
  color = '#0B1220',
  primary = '#6B4FD8',
  accent = '#A78BFA',
  reversed = false,
}: LockupProps) {
  const fs = size
  const resolvedColor = reversed ? '#FAFAF7' : color
  const resolvedPrimary = reversed ? '#A78BFA' : primary
  const resolvedAccent = reversed ? '#6B4FD8' : accent

  const dotR = fs * 0.115
  const barH = fs * 0.115
  const stemW = fs * 0.135
  const stemH = fs * 0.78
  const arcLift = fs * 0.055
  const topPad = dotR + arcLift + fs * 0.02

  const barY = topPad
  const dotCx = dotR + fs * 0.02
  const stemX = dotCx + fs * 1.0
  const barEndExt = fs * 0.18
  const barEndX = stemX + barEndExt
  const barMidX = (dotCx + barEndX) / 2
  const tStem = (stemX - dotCx) / (barEndX - dotCx)
  const yAtStem = barY - 4 * arcLift * tStem * (1 - tStem)

  const svgW = barEndX + barH
  const svgH = barY + stemH + barH / 2

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        fontFamily: '"Inter Tight", system-ui, sans-serif',
        lineHeight: 1,
      }}
    >
      <svg
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        style={{ display: 'block', flex: '0 0 auto', overflow: 'visible' }}
        aria-hidden="true"
      >
        <path
          d={`M ${dotCx} ${barY} Q ${barMidX} ${barY - 2 * arcLift}, ${barEndX} ${barY}`}
          stroke={resolvedPrimary}
          strokeWidth={barH}
          strokeLinecap="round"
          fill="none"
        />
        <rect
          x={stemX - stemW / 2}
          y={yAtStem - barH / 2}
          width={stemW}
          height={stemH + barH / 2}
          rx={stemW / 2}
          fill={resolvedPrimary}
        />
        <circle cx={dotCx} cy={barY} r={dotR} fill={resolvedAccent} />
      </svg>
      <span
        style={{
          fontSize: fs,
          fontWeight: 600,
          letterSpacing: '-0.025em',
          color: resolvedColor,
          marginLeft: -fs * 0.08,
          marginTop: yAtStem - fs * 0.215,
          whiteSpace: 'nowrap',
        }}
      >
        hruline
        <span
          style={{
            fontWeight: 300,
            color: resolvedColor,
            opacity: 0.7,
            marginLeft: '0.30em',
          }}
        >
          Design
        </span>
      </span>
    </div>
  )
}
