import React, { Component } from "react";
import { connect } from "react-redux";

class IndexPage extends Component {
  static getInitialProps({ store }) {
    store.dispatch({ type: "FOO", payload: "foo" }); // component will be able to read from store's state when rendered
    return { custom: "custom" }; // you can pass some custom props to component from here
  }

  render() {
    const {
      props: { foo, custom }
    } = this;

    return (
      <div>
        <div className="example">
          Prop from Redux
          {foo}
        </div>
        <div>
          Prop from getInitialProps
          {custom}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(IndexPage);
