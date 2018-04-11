import React from 'react'
import Card from './Card'
import cardData from '../assets/cardData'

class CardTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cardArr: '',
            activeCards: [],
            selectedCardsIndex: []
        };
    }

    componentWillMount(){
        this.setState({cardArr: cardData.cardArr})
    }


    componentDidMount(){
        this.setInitialCards()
    }

    setInitialCards(){
        let cardIndexes = []
        let selectedCards = []

        while(selectedCards.length < 12){
            let cardIndex = Math.round(Math.random()*(this.state.cardArr.length)-1)
            if(!cardIndexes.includes(cardIndex)){
                cardIndexes.push(cardIndex)
                selectedCards.push(this.state.cardArr[cardIndex])
            }
        }

        let previousState = this.state
        previousState.activeCards = selectedCards
        previousState.selectedCardsIndex = cardIndexes
        this.setState(previousState)
    }

    generateActiveCards(){
        let cardHolder = []

        this.state.activeCards.forEach(card => {
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