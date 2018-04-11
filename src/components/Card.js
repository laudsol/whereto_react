import React from 'react'

class Card extends React.Component{
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