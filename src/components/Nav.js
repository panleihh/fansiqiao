import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { IsPC } from '../common/help';
import fans0 from '../images/fans0.jpeg';

import styles from './Nav.module.css';

const navList = {
  1: '自我介绍',
  2: '工作瞬间',
  3: '工作经历',
  4: '关于我',
  5: '联系方式',
}

const iconList = {
  1: 'user',
  2: 'briefcase',
  3: 'file-text',
  4: 'star',
  5: 'envelope',
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
    index: 1,
  }

  handleChangeTab = i => () => {
    const { onChangeTab } = this.props;

    if (!IsPC()) {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
    this.setState({ index: Number(i) });
    onChangeTab(Number(i));
  }

  render() {
    const { className } = this.props;
    const { index } = this.state;
    const { handleChangeTab } = this;

    const preClass = classnames(styles.container, className);

    return (
      <div className={preClass}>
        <div className={styles.avatar}>
          <div className={styles.avatarBox}>
            <img className={styles.avatarImg} src={fans0} alt='' />
          </div>
        </div>

        <ul className={styles.list}>
          {Object.keys(navList).map(item => (
            <li
              className={classnames(styles.listItem, { [styles.activeItem]: index === Number(item) })}
              key={item}
              onClick={handleChangeTab(item)}
            >
              <span className={styles.listItemText}>{navList[item]}</span>
              <i className={classnames('fa', `fa-${iconList[item]}`, styles.listItemIcon)} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}