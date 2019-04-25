import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Work.module.css';

const list = [
  { key: 1, type: '工作' },
  { key: 2, type: '主持' },
  { key: 3, type: '配音' },
  { key: 4, type: '运动' },
  { key: 5, type: '旅游' },
]

export default class Work extends Component {
  state = {
    active: 1,
  }

  handleChangeListItem = item => () => {
    this.setState({ active: item });
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
          {list.map(item => (
            <li
              className={classnames(styles.listItem, { [styles.activeItem]: active === item.key })}
              key={item.key}
              onClick={handleChangeListItem(item.key)}
            >
              {item.type}
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
