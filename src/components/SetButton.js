import React from 'react'
import { Button } from 'react-bootstrap'

class SetButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Button bsStyle="primary" bsSize="large">
                Set Button
            </Button>
        )
    }    
}

export default SetButton