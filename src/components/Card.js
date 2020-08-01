import React from 'react';
import PropTypes from 'prop-types';

import backImg from '../images/back.jpg';

export default function Card({
    id, frontImg, isCardReversed,
    handleCardClick 
}) {    
    const cardImg = isCardReversed ? frontImg : backImg;
    
    const onClick = () => {
        if(isCardReversed === false){
            handleCardClick({ frontImg, id });
        }
    }

    return (
        <div className="card-item" onClick={onClick}>
            <img src={cardImg} width="100%" alt="card"/>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    frontImg: PropTypes.string.isRequired,
    isCardReversed: PropTypes.bool.isRequired,
    handleCardClick: PropTypes.func.isRequired,
}
