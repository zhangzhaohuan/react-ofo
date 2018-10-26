/**
 * 滚动到顶部的组件：切换路由时，scrollTo(0,0)
 */

import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollTop);