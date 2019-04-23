import React, { Component } from 'react';

import styles from './Contact.module.css';

const list = [
  { icon: 'home', value: 'lorem ipsum street' },
  { icon: 'tel', value: '+399 (500) 321 9548' },
  { icon: 'e-mail', value: 'info@domain.com' },
]

export default class Contact extends Component {

  render() {

    return (
      <div>
        <h2 className={styles.title}>
          Contact Me
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