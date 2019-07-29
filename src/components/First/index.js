import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class First extends Component {
  render() {
    return (
      <>
        <h1>Hello First</h1>
        <Link to='/'>Go Home</Link>
      </>
    )
  }
}