import React, { Component } from 'react';

import Nav from '../components/Nav';
import Profile from '../components/Profile';

import styles from './Home.module.css';

export default class Home extends Component {

  handleChangeTab = (i) => {
    console.log(i)
  }

  render() {
    const { handleChangeTab } = this;

    return (
      <div className={styles.container}>
        <Nav className={styles.nav} onChangeTab={handleChangeTab} />
        <div className={styles.content}>
          <Profile />
        </div>
      </div>
    )
  }
}