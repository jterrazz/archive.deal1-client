import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/main.scss";

class Page extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch({ type: "FOO", payload: "foo" }); // component will be able to read from store's state when rendered
    return { custom: "custom" }; // you can pass some custom props to component from here
  }
  render() {
    return (
      <div>
        <div className="example">Prop from Redux {this.props.foo}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
      </div>
    );
  }
}

export default connect(state => state)(Page);
