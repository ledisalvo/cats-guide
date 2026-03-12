import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names, resolving conflicts correctly.
 * Drop-in compatible with shadcn/ui's cn() utility.
 *
 * @param  {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
