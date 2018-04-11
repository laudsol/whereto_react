import React, { Component } from 'react';
import CardTable from './components/CardTable'
import SetButton from './components/SetButton'
import './App.css';


class App extends React.Component {
  render(){
      return(
        <div>
          <SetButton/>
          <CardTable/>
        </div>
      )
  }
}

export default App;
