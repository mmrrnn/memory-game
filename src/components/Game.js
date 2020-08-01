import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

export default function Game({ array }) {
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    const handleCardClick = ({ id, frontImg }) => {
        if(selectedCards.length === 2){
            if(selectedCards[0].frontImg === selectedCards[1].frontImg){
                setMatchedCards([...matchedCards, ...selectedCards]);
            }
            setSelectedCards([{ id, frontImg }])
        } else {
            setSelectedCards([...selectedCards, { id, frontImg }]);
        }
    }

    return array.map((cardSrc, cardId) => {
        const foundCard = [...matchedCards, ...selectedCards]
            .find(card => card.id === cardId);
        const isCardReversed = typeof foundCard !== 'undefined';

        return (
            <Card
                id={cardId}
                key={cardId}
                frontImg={cardSrc}
                isCardReversed={isCardReversed}
                handleCardClick={handleCardClick}
            />
        )
    })
}

Game.propTypes = {
    array: PropTypes.array.isRequired,
}