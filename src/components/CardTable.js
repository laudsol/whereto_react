import React from 'react'
import Card from './Card'

class CardTable extends React.Component{
    render() {
        return (
            <div className="CardTable">
                <Card/>
                <Card/>
            </div>
        )
    }    
}

export default CardTable