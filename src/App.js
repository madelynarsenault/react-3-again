import React, {Component} from 'react';
import './App.css'
import DisplayContent from './components/DisplayContent'

import Buttons from './components/Buttons';


class App extends Component {
  constructor () {
    super()
    this.state = {
      arrayNum: 0,
      indexNum: 1

    }
    
  }

  handleClickPlus = () => {
    if(this.state.indexNum < 25){
    this.setState({arrayNum: this.state.arrayNum + 1,
      indexNum: this.state.indexNum + 1
      
    })
  }

  }

  handleClickMinus = () => {
    if (this.state.indexNum > 1){
    this.setState({arrayNum: this.state.arrayNum - 1,
      indexNum: this.state.indexNum - 1
    })
  }
  }

  render () {
  return (
    <div className="Container">
      <div className="Header">
      <h2>Home</h2>
      </div>
      <DisplayContent arrayNum={this.state.arrayNum} indexNum={this.state.indexNum}/>
      <Buttons handleClickPlus={this.handleClickPlus} handleClickMinus={this.handleClickMinus}/>
    
     
    </div>
      
      
    
  );
}
}

export default App;