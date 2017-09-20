import React, { Component } from 'react';
import FbLoginBtn from './components/FbLogin';
import SearchLocation from './components/SearchLocation';
import './App.css';


class App extends React.Component {
  render(){
      return(
        <div>
          <FbLoginBtn />
          <SearchLocation />
        </div>
      )
  }
}

export default App;
