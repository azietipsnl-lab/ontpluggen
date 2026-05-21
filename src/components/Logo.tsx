interface LogoProps {
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  symbolOnly?: boolean;
}

export default function Logo({ color = '#9f402d', size = 'md', symbolOnly = false }: LogoProps) {
  const heights: Record<string, number> = { xs: 20, sm: 28, md: 36, lg: 52 };
  const h = heights[size];

  if (symbolOnly) {
    return (
      <svg height={h} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
        <ellipse cx="54" cy="62" rx="32" ry="40" stroke={color} strokeWidth="7" strokeLinecap="round" style={{ fill: 'none' }} />
        <line x1="30" y1="108" x2="78" y2="16" stroke={color} strokeWidth="7" strokeLinecap="round" />
        <path d="M22 62 C18 58 14 50 18 38 C20 30 26 24 30 22" stroke={color} strokeWidth="7" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: h * 0.3 }}>
      <svg height={h} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
        <ellipse cx="54" cy="62" rx="32" ry="40" stroke={color} strokeWidth="7" strokeLinecap="round" style={{ fill: 'none' }} />
        <line x1="30" y1="108" x2="78" y2="16" stroke={color} strokeWidth="7" strokeLinecap="round" />
        <path d="M22 62 C18 58 14 50 18 38 C20 30 26 24 30 22" stroke={color} strokeWidth="7" strokeLinecap="round" fill="none" />
      </svg>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: h * 0.75, color, letterSpacing: '0.04em', lineHeight: 1 }}>
        ONT/PLUGGEN
      </span>
    </div>
  );
}