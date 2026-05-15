import { ImageResponse } from 'next/og';

import { profile } from '@/data/profile';

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 60%, #1e3a8a 130%)',
        color: '#FAFAFA',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: '#22c55e',
            boxShadow: '0 0 0 6px rgba(34,197,94,0.18)',
          }}
        />
        <span
          style={{
            fontSize: 22,
            color: '#A1A1AA',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          {profile.role}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h1
          style={{
            fontSize: 78,
            lineHeight: 1.05,
            margin: 0,
            fontWeight: 700,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            fontSize: 32,
            lineHeight: 1.3,
            margin: 0,
            color: '#A1A1AA',
            maxWidth: 920,
          }}
        >
          I build production-grade React apps for teams that ship fast.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        {['React', 'Next.js', 'TypeScript'].map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 18,
              padding: '8px 16px',
              borderRadius: 999,
              border: '1px solid rgba(250,250,250,0.18)',
              color: '#FAFAFA',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>,
    size,
  );
}
