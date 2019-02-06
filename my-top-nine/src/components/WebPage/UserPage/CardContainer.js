import React, {Component} from 'react';

import Card from './Card';

class CardContainer extends Component {
    state = {
        isFlipped: false
    }

    handleCardFlip = () => {
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    }

    render() {
        return (
            <Card 
                isFlipped={this.state.isFlipped} 
                handleCardFlip={this.handleCardFlip}
                content={this.props.content}
            />
        )
    }
}

export default CardContainer;