import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SiderBar.module.css';

export default class SiderBar extends Component {
  static propTypes = {
    onPrint: PropTypes.func,
  }

  static defaultProps = {
    onPrint() { },
  }

  handlePrint = () => {
    const { onPrint } = this.props;
    onPrint();
  }

  handlePreview = () => {

  }

  render() {
    const { handlePrint, handlePreview } = this;

    return (
      <div className={styles.container}>
        <button className={styles.btn} onClick={handlePrint}>打印简历</button>
        <button className={styles.btn} onClick={handlePreview}>在线预览</button>
      </div>
    )
  }
}