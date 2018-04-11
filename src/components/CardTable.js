import React from 'react'
import Card from './Card'
import cardArr from '../assets/cardData'

class CardTable extends React.Component{
    constructor(props){
        super(props);
        this.state = { cardArr};
    }

    componentDidMount(){
        this.setState(cardArr)
    }


    render() {
        console.log(cardArr)
        return (
            <div className="CardTable">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }    
}

export default CardTable