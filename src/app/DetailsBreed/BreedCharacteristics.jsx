import React from 'react';

const BreedCharacteristics = ({ title, value }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-body text-xs text-muted">{title}</span>
        <span className="font-body text-xs font-semibold text-foreground">{value}/5</span>
      </div>
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-amber rounded-full"
          style={{ width: `${(value / 5) * 100}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={5}
        />
      </div>
    </div>
  );
};

export default BreedCharacteristics;
