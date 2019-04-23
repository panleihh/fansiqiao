import React, { Component } from 'react';

import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Work from '../components/Work';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

import styles from './Home.module.css';

export default class Home extends Component {
  state = {
    active: 1,
  }

  handleChangeTab = (i) => {
    this.setState({ active: i })
  }

  render() {
    const { active } = this.state;
    const { handleChangeTab } = this;

    return (
      <div className={styles.container}>
        <Nav className={styles.nav} onChangeTab={handleChangeTab} />

        <div className={styles.content}>
          {active === 1 ? ( <Profile /> ) : null}
          {active === 2 ? ( <Work /> ) : null}
          {active === 3 ? ( <Resume /> ) : null}
          {active === 4 ? ( <Profile /> ) : null}
          {active === 5 ? ( <Contact /> ) : null}
        </div>
      </div>
    )
  }
}