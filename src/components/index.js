import React from 'react'
import CardTable from './CardTable'
import SetButton from './SetButton'
import cardData from '../assets/cardData'

class SetGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cardArr: '',
            displayedCards: [],
            allPlayedCardIndexes: [],
            selectedCards: []
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
            let cardIndex = Math.round(Math.random()*(this.state.cardArr.length-1))
            if(!cardIndexes.includes(cardIndex)){
                cardIndexes.push(cardIndex)
                selectedCards.push(this.state.cardArr[cardIndex])
            }
        }

        let previousState = this.state
        previousState.displayedCards = selectedCards
        previousState.allPlayedCardIndexes = cardIndexes
        this.setState({previousState})
    }

    selectCardForSet = (card) => {
        let cardCode = Object.keys(card).map(attribute => {
            if(typeof(card[attribute]) === 'string'){
                return card[attribute].slice(0,1)
            } else {
                return card[attribute]
            }
        }).join('')

        card.cardCode = cardCode

        let previousState = this.state
        let cardAlreadySelected = false
        
        previousState.selectedCards.forEach((card, i) => {
            if(card.cardCode === cardCode){
                cardAlreadySelected = true
                previousState.selectedCards.splice(i, 1)
            }
        })

        if(!cardAlreadySelected){
            previousState.selectedCards.push(card)
        }

        this.setState(previousState)
    }

    render() {
        console.log(this.state.selectedCards)
        return (
            <div>
                <SetButton/>
                <CardTable
                    activeCards={this.state.displayedCards}
                    selectCardForSet={this.selectCardForSet}
                />
            </div>
        )
    }    
}

export default SetGame