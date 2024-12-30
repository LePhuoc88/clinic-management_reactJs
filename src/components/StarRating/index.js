import React, { useState, useEffect } from 'react';
import { GoStarFill } from 'react-icons/go';
import './StarRating.scss';

const StarRating = ({ initialRating = 0, doctorId, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        if (doctorId) {
            const savedRating = localStorage.getItem(`doctorRating_${doctorId}`);
            if (savedRating) {
                setRating(Number(savedRating));
            }
        }
    }, [doctorId]);

    const handleStarClick = (index) => {
        setRating(index);
        if (doctorId) {
            localStorage.setItem(`doctorRating_${doctorId}`, index);
        }
        if (onRatingChange) onRatingChange(index);
    };

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div className="star__rating">
            {[1, 2, 3, 4, 5].map((index) => (
                <GoStarFill
                    key={index}
                    onClick={() => handleStarClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ color: index <= (hoverRating || rating) ? '#FFD700' : '#dddddd', cursor: 'pointer' }}
                    title={`${index} sao`}
                />
            ))}
        </div>
    );
};

export default StarRating;
