import React, { Component } from "react";
import Loader from "react-loader";

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      height: ""
    };

    this.updateHeight.bind(this);
  }

  updateHeight() {
    this.setState({ height: $(window).height() });
  }

  wait = async () => {
    await this.updateHeight();
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.wait();
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <>
        <h1>{this.state.height}</h1>
        <h1>Done Loading!</h1>
      </>
    );
  }
}
