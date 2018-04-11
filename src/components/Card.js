import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }    
    
    render() {
        console.log(this.props)
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