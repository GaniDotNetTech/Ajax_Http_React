import React, { Component } from "react";

const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      componentload: null
    };
    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ componentload: cmp.default });
      });
    }
    render() {
      const C = this.state.componentload;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
