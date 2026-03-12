import React from 'react';
import catProfile from '../../content/images/cat-profile.png';

const DetailAvatar = ({ breedDetail }) => {
  const hasImage = typeof breedDetail[0].image !== 'undefined';
  const imgSrc = hasImage ? breedDetail[0].image.url : catProfile;

  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden">
      <div className="w-full h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={breedDetail[0].description}
        />
      </div>
      <div className="p-4 text-center border-t border-border">
        <h4 className="font-heading text-lg font-bold text-foreground mb-1">
          {breedDetail[0].name}
        </h4>
        <p className="font-body text-xs text-muted leading-relaxed">
          {breedDetail[0].temperament}
        </p>
      </div>
    </div>
  );
};

export default DetailAvatar;
