import React from 'react';

import './index.css';


class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      basket: [

      ]
    };
  }

  handleClick(product) {
    this.setState({
      count: this.state.count + 1,
      basket: this.state.basket.concat(product)
    });
  }
  render() {
    const basket = this.state.basket;
    const moves = basket.map((pList) => {

      return (
        <li>
          {pList}
        </li>
      );
    });

    return (

      <div>

        <div>
          <button id="Apple" className="btn btn-success" onClick={() => this.handleClick("Apple")}>Apple</button>
          <button id="Orange" className="btn btn-success" onClick={() => this.handleClick("Orange")}>Orange</button>
          <button id="Pinapple" className="btn btn-success" onClick={() => this.handleClick("Pinapple")}>Pinapple</button>
          <button id="Mango" className="btn btn-success" onClick={() => this.handleClick("Mango")}>Mango</button>
          <button id="Grape" className="btn btn-success" onClick={() => this.handleClick("Grape")}>Grape</button>
          <button id="JackFruit" className="btn btn-success" onClick={() => this.handleClick("JackFruit")}>JackFruit</button>
          <button id="Potato" className="btn btn-success" onClick={() => this.handleClick("Potato")}>Potato</button>
        </div>

        <div>
          <button className="disabled" >{this.state.count}</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Basket;
