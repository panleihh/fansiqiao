import React, { Component } from 'react';

import styles from './Profile.module.css';

const list = [
  { key: '姓名', value: 'Robb Armstrong' },
  { key: '毕业', value: '2017年6月' },
  { key: '生日', value: '07 06, 1995' },
  { key: '邮箱', value: 'fan_sqiao@163.com'},
  { key: '地址', value: '北京市朝阳区' },
  { key: '联系电话', value: '18600946777' },
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
          <h4 className={styles.infoTitle}>个人信息</h4>

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