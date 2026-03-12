import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border px-6 py-4 flex flex-wrap items-center justify-between gap-2">
      <span className="font-body text-xs text-muted">© 2024 Cats Guide</span>
      <ul className="flex items-center gap-4 list-none m-0 p-0">
        <li>
          <a
            className="font-body text-xs text-muted hover:text-foreground transition-colors no-underline"
            href="https://twitter.com/PullCommitPush"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="font-body text-xs text-muted hover:text-foreground transition-colors no-underline"
            href="https://www.instagram.com/leonardo.a.disalvo/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="font-body text-xs text-muted hover:text-foreground transition-colors no-underline"
            href="https://github.com/ledisalvo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
