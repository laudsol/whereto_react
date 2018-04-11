import React from 'react'
import Card from './Card'
import cardData from '../assets/cardData'

class CardTable extends React.Component{

    generateActiveCards(){
        let cardHolder = []

        this.props.activeCards.forEach(card => {
            cardHolder.push(<Card cardData={card}/>)
        })
        return cardHolder
    }

    render() {
        return (
            <div className="CardTable">
                {this.generateActiveCards()}
            </div>
        )
    }    
}

export default CardTable