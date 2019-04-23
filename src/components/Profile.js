import React, { Component } from 'react';

import styles from './Profile.module.css';

const list = [
  { key: 'name', value: 'Robb Armstrong' },
  { key: 'date of birth', value: 'September 06, 1976' },
  { key: 'e-mail', value: 'Robb Armstrong' },
  { key: 'address', value: 'Robb Armstrong' },
  { key: 'phone', value: 'Robb Armstrong' },
]

export default class Profile extends Component {

  render() {

    return (
      <div>
        <h2 className={styles.title}>
          Hello, I am
          <span className={styles.titleName}> Robb Armstrong</span>
          <br />
          Designer and Front-end Developer
        </h2>

        <div className={styles.line1} />

        <p className={styles.desc}>I have ten years experience as a web/interface designer. I have a love of clean, elegant styling, and I have lots of experience in the production of CSS and (X)HTML for modern websites. I have a reasonable grasp of using JavaScript frameworks, specifically jQuery.</p>

        <div className={styles.info}>
          <h4 className={styles.infoTitle}>Personal Info</h4>

          <div className={styles.line2} />

          <ul className={styles.list}>
            {list.map(item => (
              <li className={styles.listItem} key={item.key}>
                <div>
                  <em className={styles.listItemEm}>{item.key}</em>
                  <span className={styles.listItemSpan}>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}