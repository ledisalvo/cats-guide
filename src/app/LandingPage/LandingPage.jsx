import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyCat } from '../api/catBreedsActions';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
};

// ---------------------------------------------------------------------------
// Design tokens — single source of truth for this file
// ---------------------------------------------------------------------------
const T = {
  bg:        '#0F0F14',
  surface:   '#1A1A24',
  surfaceHover: '#21212E',
  border:    '#2E2E3E',
  text:      '#F2F2F7',
  muted:     '#8B8B9E',
  amber:     '#F59E0B',
  amberDim:  'rgba(245,158,11,0.12)',
  amberBorder:'rgba(245,158,11,0.35)',
  mint:      '#34D399',
  mintDim:   'rgba(52,211,153,0.10)',
  mintBorder:'rgba(52,211,153,0.30)',
  fontHead:  "'Outfit', sans-serif",
  fontBody:  "'Inter', sans-serif",
};

// ---------------------------------------------------------------------------
// Shimmer keyframe injected once — avoids any external CSS dependency
// ---------------------------------------------------------------------------
const ShimmerStyle = () => (
  <style>{`
    @keyframes cg-shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }
    .cg-shimmer {
      background: linear-gradient(
        90deg,
        ${T.surface} 25%,
        #25253A 50%,
        ${T.surface} 75%
      );
      background-size: 800px 100%;
      animation: cg-shimmer 1.6s ease-in-out infinite;
    }
  `}</style>
);

// ---------------------------------------------------------------------------
// CatCardSkeleton
// ---------------------------------------------------------------------------
const CatCardSkeleton = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '4/3',
      borderRadius: '1.25rem',
      overflow: 'hidden',
      border: `1px solid ${T.border}`,
    }}
  >
    <div
      className="cg-shimmer"
      style={{ position: 'absolute', inset: 0 }}
    />
    {/* Fake badge placeholder */}
    <div
      style={{
        position: 'absolute',
        top: 14,
        left: 14,
        width: 100,
        height: 22,
        borderRadius: 999,
        background: T.border,
        opacity: 0.6,
      }}
    />
  </div>
);

// ---------------------------------------------------------------------------
// CatOfTheDayCard
// ---------------------------------------------------------------------------
const CatOfTheDayCard = ({ imageUrl, imageAlt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        border: `1px solid ${T.border}`,
        backgroundColor: T.surface,
      }}
    >
      {/* Skeleton stays visible until image is ready */}
      {!loaded && (
        <div
          className="cg-shimmer"
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        />
      )}

      <img
        src={imageUrl}
        alt={imageAlt || 'Gato del día'}
        onLoad={() => setLoaded(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          zIndex: 2,
        }}
      />

      {/* Bottom gradient — ensures text legibility on any photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)',
          zIndex: 3,
        }}
      />

      {/* Top-left badge */}
      <div
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'rgba(0,0,0,0.55)',
          border: `1px solid rgba(255,255,255,0.12)`,
          borderRadius: 999,
          padding: '4px 12px',
          backdropFilter: 'blur(6px)',
        }}
      >
        <span style={{ fontSize: '0.7rem', lineHeight: 1 }}>🐱</span>
        <span
          style={{
            fontFamily: T.fontHead,
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: T.amber,
            textTransform: 'uppercase',
          }}
        >
          Gato del día
        </span>
      </div>

      {/* Bottom label row */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '0 16px 16px',
        }}
      >
        <span
          style={{
            fontFamily: T.fontHead,
            fontSize: '1rem',
            fontWeight: 600,
            color: T.text,
          }}
        >
          Foto aleatoria de la API
        </span>
        <span
          style={{
            fontFamily: T.fontHead,
            fontSize: '1.25rem',
            color: T.muted,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// NavCard — differentiated accent per destination
// ---------------------------------------------------------------------------
const NavCard = ({ icon, label, sublabel, to, accentColor, accentDim, accentBorder }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 0,
        padding: '18px 16px 16px',
        textDecoration: 'none',
        borderRadius: '1.25rem',
        border: `1px solid ${hovered ? accentBorder : T.border}`,
        backgroundColor: hovered ? T.surfaceHover : T.surface,
        // Accent top stripe — the main visual differentiator between the two cards
        boxShadow: hovered
          ? `inset 0 3px 0 0 ${accentColor}, 0 0 20px ${accentDim}`
          : `inset 0 3px 0 0 ${accentColor}`,
        transition: 'background-color 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease',
        minHeight: 120,
      }}
    >
      {/* Icon */}
      <span
        style={{
          fontSize: '2rem',
          lineHeight: 1,
          marginBottom: 12,
          filter: hovered ? 'saturate(1.3) brightness(1.1)' : 'none',
          transition: 'filter 0.18s ease',
        }}
        role="img"
        aria-label={label}
      >
        {icon}
      </span>

      {/* Label + sublabel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: T.fontHead,
            fontSize: '0.9375rem',
            fontWeight: 700,
            color: T.text,
            lineHeight: 1.2,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: T.fontBody,
            fontSize: '0.75rem',
            color: T.muted,
            lineHeight: 1.3,
          }}
        >
          {sublabel}
        </span>
      </div>
    </Link>
  );
};

// ---------------------------------------------------------------------------
// LandingPage
// ---------------------------------------------------------------------------
const LandingPage = () => {
  const dispatch = useDispatch();
  const randomCat = useSelector((state) => state.cats.randomCat);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    dispatch(getDailyCat());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const catImage = randomCat?.[0];
  const isLoaded = Boolean(catImage?.url);

  const Divider = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
      <div style={{ flex: 1, height: 1, background: T.border }} />
      <span style={{ fontFamily: T.fontBody, fontSize: '0.7rem', fontWeight: 600, color: T.muted, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        ¿A dónde vas?
      </span>
      <div style={{ flex: 1, height: 1, background: T.border }} />
    </div>
  );

  const NavCards = () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <NavCard icon="🎮" label="Juegos" sublabel="Quiz + Memoria" to="/App/juegos" accentColor={T.amber} accentDim={T.amberDim} accentBorder={T.amberBorder} />
      <NavCard icon="📖" label="Wiki Cat" sublabel="Explorar razas" to="/App/" accentColor={T.mint} accentDim={T.mintDim} accentBorder={T.mintBorder} />
    </div>
  );

  const Header = () => (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isDesktop ? '32px 48px 0' : '28px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>🐾</span>
        <span style={{ fontFamily: T.fontHead, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', color: T.muted, textTransform: 'uppercase' }}>
          Cats Guide
        </span>
      </div>
      <span style={{ fontFamily: T.fontBody, fontSize: '0.65rem', fontWeight: 600, color: T.amber, background: T.amberDim, border: `1px solid ${T.amberBorder}`, borderRadius: 999, padding: '3px 9px', letterSpacing: '0.04em' }}>
        v2.0
      </span>
    </header>
  );

  return (
    <>
      <ShimmerStyle />
      <div style={{ minHeight: '100vh', backgroundColor: T.bg, fontFamily: T.fontBody }}>
        <Header />

        {isDesktop ? (
          /* ── DESKTOP: 2-column layout ── */
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px 48px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'center', minHeight: 'calc(100vh - 80px)' }}>
            {/* Left column: hero + nav cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <section>
                <p style={{ fontFamily: T.fontBody, fontSize: '0.85rem', fontWeight: 500, color: T.muted, margin: '0 0 10px', letterSpacing: '0.02em' }}>
                  Tu guía felina
                </p>
                <h1 style={{ fontFamily: T.fontHead, fontSize: '3.25rem', fontWeight: 800, color: T.text, lineHeight: 1.1, margin: '0 0 16px' }}>
                  Jugá, explorá<br />
                  <span style={{ color: T.amber }}>y conocé gatos.</span>
                </h1>
                <p style={{ fontFamily: T.fontBody, fontSize: '1rem', color: T.muted, margin: 0, lineHeight: 1.6 }}>
                  Poné a prueba tu conocimiento felino con juegos interactivos o explorá el mundo de las razas de gatos.
                </p>
              </section>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Divider />
                <NavCards />
              </div>
            </div>

            {/* Right column: cat of the day */}
            <div>
              {isLoaded
                ? <CatOfTheDayCard imageUrl={catImage.url} imageAlt={catImage.id} />
                : <CatCardSkeleton />
              }
            </div>
          </div>
        ) : (
          /* ── MOBILE: single column ── */
          <>
            <section style={{ padding: '24px 20px 20px' }}>
              <p style={{ fontFamily: T.fontBody, fontSize: '0.8rem', fontWeight: 500, color: T.muted, margin: '0 0 6px', letterSpacing: '0.02em' }}>
                Tu guía felina
              </p>
              <h1 style={{ fontFamily: T.fontHead, fontSize: '2.25rem', fontWeight: 800, color: T.text, lineHeight: 1.15, margin: 0 }}>
                Jugá, explorá<br />
                <span style={{ color: T.amber }}>y conocé gatos.</span>
              </h1>
            </section>
            <main style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 20px 40px' }}>
              {isLoaded
                ? <CatOfTheDayCard imageUrl={catImage.url} imageAlt={catImage.id} />
                : <CatCardSkeleton />
              }
              <Divider />
              <NavCards />
            </main>
          </>
        )}
      </div>
    </>
  );
};

export default LandingPage;
