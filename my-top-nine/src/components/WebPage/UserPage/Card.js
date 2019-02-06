import React from 'react';

import ReactCardFlip from 'react-card-flip';

import { CardWrapper, CardFront, CardBack} from '../../Reusable/StyledComponents'

const Card = props => {
    return (
        <CardWrapper>
            <ReactCardFlip isFlipped={props.isFlipped}>
                <CardFront key="front" onClick={props.handleCardFlip}>Front</CardFront>
                <CardBack key="back" onClick={props.handleCardFlip}>Back</CardBack>
            </ReactCardFlip>
        </CardWrapper>
    );
}

export default Card;