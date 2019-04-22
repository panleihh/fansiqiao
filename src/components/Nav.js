import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Nav.module.css';

const navList = {
  1: 'profile',
  2: 'work',
  3: 'resume',
  4: 'blog',
  5: 'contact',
}

export default class Nav extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChangeTab: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    onChangeTab() { },
  }

  state = {
    index: 0,
  }

  handleChangeTab = i => () => {
    const { onChangeTab } = this.props;

    this.setState({ index: Number(i) });

    onChangeTab(i);
  }

  render() {
    const { className } = this.props;
    const { index } = this.state;
    const { handleChangeTab } = this;

    const preClass = classnames(styles.container, className);

    return (
      <div className={preClass}>
        <div className={styles.avatar}>
          <img className={styles.avatarImg} src='' alt='' />
        </div>

        <ul className={styles.list}>
          {Object.keys(navList).map(item => (
            <li
              className={classnames(styles.listItem, { [styles.activeItem]: index === Number(item) })}
              key={item}
              onClick={handleChangeTab(item)}
            >
              <span className={styles.listItemText}>{navList[item]}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}