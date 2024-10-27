import React from 'react';

const StarRating = ({ rating }) => {
  // Generate an array of 5 stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (starValue <= rating) {
      return '★'; // Filled star for full rating
    } else if (starValue - 0.5 === rating) {
      return '⯨'; // Half-filled star (can customize the symbol as needed)
    } else {
      return '☆'; // Empty star
    }
  });

  return (
    <div style={{ fontSize: '24px', color: '#FFD700' }}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
