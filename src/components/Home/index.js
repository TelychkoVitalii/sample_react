import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getExample } from "./redux/actions/example.action";

const mapStateToProps = state => {
  const { loading, data, error } = state.Example_reducer;
  return { loading, data, error };
};

export default connect(mapStateToProps, null)(class Home extends Component {

  goFirst = () => this.props.dispatch(getExample('first'));
  goSecond = () => this.props.dispatch(getExample('second'));

  render() {
    return (
      <>
        <h1>My Home</h1>
        <Link to='first' onClick={this.goFirst}>Go to first link</Link>
        <Link to='second' onClick={this.goSecond}>Go to second link</Link>
      </>
    )
  }
});