import React from 'react'
import { Button } from 'react-bootstrap'

class SetButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    evaluateSet(){
        this.props.evaluateSet()
    }

    render() {
        return (
            <Button bsStyle="primary" bsSize="large" onClick={()=> this.evaluateSet()}>
                Set Button
            </Button>
        )
    }    
}

export default SetButton