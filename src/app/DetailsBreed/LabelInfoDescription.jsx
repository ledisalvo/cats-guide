import React from 'react';

const LabelInfoDescripcion = ({ label, linkDescription, description }) => {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <span className="font-body text-xs font-semibold text-muted min-w-[120px] shrink-0">
        {label}
      </span>
      <div className="font-body text-xs text-foreground flex-1">
        {linkDescription?.length > 0 ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={linkDescription}
            className="text-amber hover:underline no-underline"
          >
            Ver enlace →
          </a>
        ) : (
          <span>{description}</span>
        )}
      </div>
    </div>
  );
};

export default LabelInfoDescripcion;
