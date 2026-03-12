import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Temporary smoke-test component to verify Tailwind + cn() are working.
 * Can be removed once the setup is confirmed.
 */
const TailwindSetupCheck = ({ className }) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-surface p-4 font-body text-sm',
        className
      )}
    >
      <p className="font-heading text-base font-semibold text-text">
        Tailwind + shadcn/ui setup
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="rounded bg-amber px-2 py-0.5 text-xs font-medium text-background">
          amber
        </span>
        <span className="rounded bg-coral px-2 py-0.5 text-xs font-medium text-text">
          coral
        </span>
        <span className="rounded bg-mint px-2 py-0.5 text-xs font-medium text-background">
          mint
        </span>
        <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-background">
          muted
        </span>
      </div>
    </div>
  );
};

export default TailwindSetupCheck;
