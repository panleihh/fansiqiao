import React, { Component } from 'react';
import classnames from 'classnames';

import '../style/animate.css';
import styles from './About.module.css';

const honorlist = [
  '2016年校特殊贡献奖',
  '2015年院优秀学生干部',
  '2015年校广播电视台优秀播音员',
  '2015年完成了辅修专业-本校人力资源管理学习',
  '2014年湖南省大学生艺术展三等奖（团体奖）',
  '2014年校文体活动先进个人',
  '2014年校广播电视台优秀部门负责人',
  '2013年校主持人大赛第一名',
  '2013年校主持人大赛最佳人气奖',
  '2013年院四大才艺赛第一名',
]

export default class About extends Component {
  render() {

    return (
      <div>
        <h2 className={classnames('animated fadeInDown', styles.title)}>
          关于我
        </h2>

        <section className={classnames('animated slideInLeft', styles.section)}>
          <p className={styles.sectionTitle}>获奖经历</p>
          <div className={styles.line2} />
          <ul className={styles.honorList}>
            {honorlist.map(item => (
              <li className={styles.honorListItem} key={item}>
                <i className={classnames('fa fa-tag', styles.listItemIcon)} />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}