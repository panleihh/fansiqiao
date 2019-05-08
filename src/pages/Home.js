import React, { Component } from 'react';

import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Work from '../components/Work';
import Resume from '../components/Resume';
import About from '../components/About';
import Contact from '../components/Contact';
import SiderBar from '../components/SiderBar';

import styles from './Home.module.css';

export default class Home extends Component {
  state = {
    active: 1,
    isPrint: false,
  }

  handleChangeTab = (i) => {
    this.setState({ active: i })
  }

  handlePrint = () => {
this.setState({
  isPrint: true,
}, () => {
  window.print();
  window.location.reload();
})
  }

  render() {
    const { active, isPrint } = this.state;
    const { handleChangeTab, handlePrint } = this;

    return (
      <div className={styles.container}>
        <Nav className={styles.nav} onChangeTab={handleChangeTab} />

        <div className={styles.content}>
          {active === 1 || isPrint ? ( <Profile /> ) : null}
          {active === 2 ? ( <Work /> ) : null}
          {active === 3 || isPrint ? ( <Resume /> ) : null}
          {active === 4 || isPrint ? ( <About /> ) : null}
          {active === 5 || isPrint ? ( <Contact /> ) : null}
        </div>

        <SiderBar onPrint={handlePrint} /> 
      </div>
    )
  }
}