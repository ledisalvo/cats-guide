import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomImage } from '../api/catBreedsActions';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Skeleton placeholder for the cat-of-the-day card while the image loads.
 * Uses Tailwind animate-pulse — no spinner, never blocking.
 */
const CatCardSkeleton = () => (
  <div className="relative w-full overflow-hidden rounded-2xl bg-surface" style={{ aspectRatio: '16/9' }}>
    <div className="absolute inset-0 animate-pulse bg-border" />
  </div>
);

/**
 * Full-width card for the cat of the day.
 * Shows a 16:9 photo with a bottom gradient overlay and a label + arrow on top.
 */
const CatOfTheDayCard = ({ imageUrl, imageAlt }) => (
  <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
    <img
      src={imageUrl}
      alt={imageAlt}
      className="absolute inset-0 h-full w-full object-cover"
    />
    {/* Gradient overlay — bottom to top */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    {/* Label row sits on top of the overlay */}
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4">
      <span className="font-heading text-base font-semibold text-foreground">
        Gato del día
      </span>
      <span className="text-foreground text-lg leading-none" aria-hidden="true">
        →
      </span>
    </div>
  </div>
);

/**
 * Square-ish card for secondary navigation items.
 * Icon on top, label centered below.
 */
const NavCard = ({ icon, label, to, accentClass }) => (
  <Link
    to={to}
    className={cn(
      'flex flex-1 flex-col items-center justify-center gap-3',
      'rounded-2xl bg-surface p-6',
      'border border-border',
      'transition-colors duration-150 hover:border-muted',
      accentClass
    )}
  >
    <span className="text-4xl leading-none" role="img" aria-label={label}>
      {icon}
    </span>
    <span className="font-heading text-sm font-semibold text-foreground">
      {label}
    </span>
  </Link>
);

// ---------------------------------------------------------------------------
// LandingPage
// ---------------------------------------------------------------------------

const LandingPage = () => {
  const dispatch = useDispatch();
  const randomCat = useSelector((state) => state.cats.randomCat);

  useEffect(() => {
    dispatch(getRandomImage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const catImage = randomCat?.[0];
  const isLoaded = Boolean(catImage?.url);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                               */}
      {/* ------------------------------------------------------------------ */}
      <header className="px-4 pt-6 pb-2">
        <span className="font-heading text-sm font-semibold tracking-widest text-muted uppercase">
          cats guide
        </span>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Hero copy                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-4 pt-4 pb-6">
        <h1 className="font-heading text-4xl font-bold text-foreground leading-tight">
          Hola.
        </h1>
        <p className="mt-1 font-body text-base text-muted">
          ¿Qué querés hacer hoy?
        </p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Cards                                                                */}
      {/* ------------------------------------------------------------------ */}
      <main className="flex flex-col gap-4 px-4 pb-8">
        {/* Card 1 — Cat of the day (full width) */}
        {isLoaded ? (
          <CatOfTheDayCard imageUrl={catImage.url} imageAlt={catImage.id} />
        ) : (
          <CatCardSkeleton />
        )}

        {/* Cards 2 + 3 — side by side */}
        <div className="flex gap-4">
          <NavCard
            icon="🎮"
            label="Juegos"
            to="/App/juegos"
            accentClass="hover:bg-amber/10"
          />
          <NavCard
            icon="📖"
            label="Wiki Cat"
            to="/App/"
            accentClass="hover:bg-mint/10"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
