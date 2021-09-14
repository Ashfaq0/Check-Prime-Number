import React, { Component } from 'react';
import './App.css'

export class App extends Component {
  constructor(){
    super()

    this.state = {
      number: "",
      msg: ""
    }
  }
  Primenumber(e){
    var num = parseInt(e.target.value);
    var message;
  

  if(num >= 2) {
    if(num == 2){
      message = "this is a Prime number"
    }else{
      let prime = true;
      for(var i = 2; i < num; i++){
        if(num % i == 0){
          prime = false;
          break;
        }
      }
      if(prime){
        message = "this is a prime number"
      }else{
        message = "this is not a prime number"
      }
    }
    }else{
      message = "this is not a prime number"
    }
  
  this.setState({
    number:num,
    msg:message
  })

}
  
  
  render() {
    return (
      <div className="App">
          
         <input type ="number" id="input" value={this.state.number} onChange={this.Primenumber.bind(this)}/>
         <p> {this.state.number} {this.state.msg} </p>
      
      </div>
    )
  }
}

export default App
