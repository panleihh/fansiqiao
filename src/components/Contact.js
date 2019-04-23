import React, { Component } from 'react';

import styles from './Contact.module.css';

const list = [
  { icon: '住址', value: '北京市朝阳区将台路' },
  { icon: '手机号', value: '188600946777' },
  { icon: '邮箱', value: 'fan_sqiao@163.com' },
]

export default class Contact extends Component {

  render() {

    return (
      <div>
        <h2 className={styles.title}>
          联系我
        </h2>

        <div className={styles.map}>
          map
        </div>

        <ul className={styles.list}>
          {list.map(item => (
            <li className={styles.listItem} key={item.icon}>
              <i className={styles.listItemIcon}>{item.icon}</i>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}