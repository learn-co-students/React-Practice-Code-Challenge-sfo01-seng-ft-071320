import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushis: [],
    display: [],
    wallet: 0,
    displayIndex: 0,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sushis: res,
        });
      });
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price;

    if (!this.state.eaten.includes(sushi) && newMoney >= 0)
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney,
      });
  };

  chooseFourSushis = () => {
    return this.state.sushis.slice(
      this.state.displayIndex,
      this.state.displayIndex + 4
    );
  };

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4;
  };

  render() {
    return (
      <div className="app">
        <form onSubmit={this.addMoney}>
          Add $ to budget
          <input type="text" />
          <input type="submit" />
        </form>
        <SushiContainer
          sushis={this.chooseFourSushis()}
          more={this.more}
          eat={this.eat}
          eaten={this.state.eaten}
        />

        <Table remainingBudget={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
