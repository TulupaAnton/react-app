import { Component } from "react";

class CounterWithClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  dec = () => {
    // this.count = this.state.count - this.props.step;
    this.setState({ count: this.state.count - this.props.step });
  };

  inc = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default CounterWithClasses;
