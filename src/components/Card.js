import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }  
    
    classNameBuilder(cardData){
        let shapeColorName = ''
        let colorName = cardData.color.split('')
        
        shapeColorName += cardData.fill
        for(let i = 0; i < colorName.length; i++){
            if(i === 0){
                shapeColorName += colorName[i].toUpperCase()
            } else {
                shapeColorName += colorName[i]
            }
        }
        return `${cardData.shape} ${shapeColorName}`
    }

    componentDidMount(){
        let formattedClassName = this.classNameBuilder(this.props.cardData)
        console.log('formattedClassName', formattedClassName)
    }

    
    render() {
        return (
            <div className="Card">
                <div className="shapeContainer">
                    <div className="diamond clearRed"></div>
                    <div className="diamond clearRed"></div>
                    <div className="diamond clearRed"></div>
                </div>    
            </div>
        )
    }    
}

export default Card