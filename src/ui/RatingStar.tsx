import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
type ratingProp = {
  rating: number;
};
const RatingStar = ({ rating }: ratingProp) => {
  // Ensure rating is within the expected range
  const normalizedRating = Math.max(0, Math.min(rating, 5));

  const fullStars = Math.floor(normalizedRating);
  const halfStars = normalizedRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  // Ensure array lengths are valid
  const fullStarArray = Array(fullStars).fill(null);
  const halfStarArray = Array(halfStars).fill(null);
  const emptyStarArray = Array(emptyStars).fill(null);

  return (
    <div className="flex items-center">
      {fullStarArray.map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {halfStarArray.map((_, index) => (
        <FaStarHalfAlt key={`half-${index}`} className="text-yellow-500" />
      ))}
      {emptyStarArray.map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
      ))}
      <span className="ml-2">{rating}</span>
    </div>
  );
};

export default RatingStar;

// Usage example:
// <StarRating rating={3.6} />
