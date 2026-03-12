import { Link } from 'react-router-dom';
import catProfile from '../../../content/images/cat-profile.png';

const CatBreedCard = ({ catBreedInfo }) => {
  const { id, image, description, name } = catBreedInfo;
  const imgSrc =
    typeof image !== 'undefined' && Object.entries(image).length !== 0
      ? image.url
      : catProfile;

  return (
    <div
      key={id}
      className="bg-surface border border-border rounded-2xl overflow-hidden flex flex-col hover:border-amber/40 transition-colors"
    >
      <div className="w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={imgSrc} alt={description} />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h5 className="font-heading text-base font-bold text-foreground">{name}</h5>
        <p className="font-body text-xs text-muted line-clamp-4 flex-1">{description}</p>
        <Link
          to={`detail/${name}`}
          className="font-body text-xs text-amber no-underline hover:underline mt-1"
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
};

export default CatBreedCard;
