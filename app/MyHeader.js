import React, { Component } from 'react';
import MyPhotu from './MyPhotu';
import './css/MyHeader.css';

const MyDetails = () =>
  <div className="flex-col align-center details">
      <h1>Kushan Joshi</h1>
      <h2>Web Developer · Programmer · Student</h2>
  </div>;

const Social = () =>
  <div className="flex-row justify-center" >
    <a target="_blank" style={{ marginTop: 4,  textDecoration: 'none', color: 'inherit' }} href="https://github.com/kepta">github.com/<span style={{ fontWeight: 500, color: 'rgb(115, 26, 115)' }}>kepta</span></a>
  </div>;

export default class MyHeader extends Component {
  render() {
    return (
      <div>
        <div className="flex-column align-center MyHeader">
          <MyPhotu />
          <MyDetails />
          <Social />
        </div>
      </div>
    );
  }
}
