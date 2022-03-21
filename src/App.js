import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      Coin: "Coin"
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin() {
    this.setState({Coin : "" }, () => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads" });
        console.log("heads");
      } else {
        this.setState({ result: "tails" });
        console.log("tails");
      }
    });
  }
    render()
    {
      return  <div className="App">
      <div id="coin" key={+new Date()}>
        {
          this.state.result==="tails"&&<div class="side-a">
          <h2>TAIL</h2>
        </div>
    }
        
    {this.state.result==="heads"&&<div className="side-b">
          <h2>HEAD</h2>
        </div>
    }
      </div>
      <h1>Flip a coin</h1>
      <button id="btn" onClick={this.flipCoin}>
       Flip Coin
      </button>
    </div>
    }
  
 }
export default App;