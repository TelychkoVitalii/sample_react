import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Second extends Component {
  render() {
    return (
      <>
        <h1>Hello Second</h1>
        <Link to='/'>Go Home</Link>
      </>
    )
  }
}