/**
 * 按需加载函数
 */
import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }

    componentWillUnmount() {
      this.state = (state, callback) => {
        return;
      };
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : ('')
    }
  }
  return AsyncComponent;
}