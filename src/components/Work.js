import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Work.module.css';

const list = {
  1: 'All',
  2: 'Web Design',
  3: 'App Icons',
  4: 'iOS App UI',
}

export default class Work extends Component {

  state = {
    active: 1,
  }

  handleChangeListItem = item => () => {
    this.setState({ active: Number(item) });
  }

  render() {
    const { active } = this.state;
    const { handleChangeListItem } = this;

    return (
      <div>
        <h2 className={styles.title}>
          Work
        </h2>

        <ul className={styles.list}>
          {Object.keys(list).map(item => (
            <li
              className={classnames(styles.listItem, { [styles.activeItem]: active === Number(item) })}
              key={item}
              onClick={handleChangeListItem(item)}
            >
              {list[item]}
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
