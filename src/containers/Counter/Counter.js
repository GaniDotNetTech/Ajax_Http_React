import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.OnIncrement} />
        <CounterControl label="Decrement" clicked={this.props.OnDecrement} />
        <CounterControl label="Add 5" clicked={this.props.OnAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.OnSubtract} />
        <hr />
        <button onClick={() => this.props.OnStoredResult(this.props.ctr)}>
          Stored Result
        </button>
        {this.props.StoredResult.map((strResulr) => (
          <ul>
            <li
              id={strResulr.id}
              onClick={() => this.props.OnDeleteStoredResult(strResulr.id)}
            >
              {strResulr.val}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    StoredResult: state.res.results
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    OnIncrement: () => dispatch({ type: "Increment" }),
    OnDecrement: () => dispatch({ type: "Decrement" }),
    OnAdd: () => dispatch({ type: "Add", val: 5 }),
    OnSubtract: () => dispatch({ type: "Subtract", val: 10 }),
    OnStoredResult: (result) =>
      dispatch({ type: "StoredResult", result: result }),
    OnDeleteStoredResult: (id) =>
      dispatch({ type: "DeleteStoredResult", deletedResult: id })
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Counter);
