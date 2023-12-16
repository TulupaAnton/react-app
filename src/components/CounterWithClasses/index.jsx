import { Component } from "react";

class CounterWithClasses extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    "componentWillUnmount";
  }

  dec = () => {
    const {
      state: { count },
      props: { step },
    } = this;
    this.setState({ count: count - step });
  };

  inc = () => {
    const {
      state: { count },
      props: { step },
    } = this;
    this.setState({ count: count + step });
  };

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <div>
        Count: {count}
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default CounterWithClasses;
