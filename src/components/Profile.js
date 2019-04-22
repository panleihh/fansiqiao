import React, { Component } from 'react';

import styles from './Profile.module.css';

export default class Content extends Component {

  render() {

    return (
      <div>
        <h2>
          Hello, I am
          <span>Robb Armstrong</span>
          <br />
          Designer and Front-end Developer
        </h2>
      </div>
    )
  }
}