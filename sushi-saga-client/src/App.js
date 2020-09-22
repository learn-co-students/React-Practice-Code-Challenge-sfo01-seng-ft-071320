import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    cash: 100,
  }
  
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => 
        this.setState({
          sushis: sushis
        })
      )
  }

  showFourSushis = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  onMoreSushi = () => {
    this.setState({ 
      index: this.state.index + 4
    })
  }

  onEatenSushi = (sushi) => {
    const newMoney = this.state.cash - sushi.price;
    sushi.eaten = true;
    if (newMoney >= 0) {
      this.setState({
        cash: newMoney
      })
    }
  }


  render() { 
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushis={this.showFourSushis()} onMoreSushi={this.onMoreSushi} onEatenSushi={this.onEatenSushi}/>
        <Table cash={this.state.cash} sushi={this.state.sushis.filter(sushi => sushi.eaten)}/>
      </div>
    );
  }
}

export default App;