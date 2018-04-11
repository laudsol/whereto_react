import React from 'react'
import CardTable from './CardTable'
import SetButton from './SetButton'

class SetGame extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <SetButton/>
                <CardTable/>
            </div>
        )
    }    
}

export default SetGame