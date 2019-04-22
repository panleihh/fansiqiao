import React, { Component } from 'react';

import styles from './Home.module.css';

export default class Home extends Component {

  render() {

    return(
      <div>
        <div className={styles.left}>left</div>
        <div>right</div>
      </div>
    )
  }
}