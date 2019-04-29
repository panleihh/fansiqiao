import React, { Component } from 'react';
import classnames from 'classnames';

import '../style/animate.css';
import styles from './Work.module.css';

const list1 = [1, 2, 3, 4, 5, 6];
const list2 = [
  {key: 21, imgUrl: 'https://shp.qpic.cn/ttkg/130117453/3a32cfe95872c6bc047e47ef83f9fafc598164af/640'},
  {key: 22, imgUrl: 'https://shp.qpic.cn/ttkg/130117453/290dcfe95872c6bc047e47ef83f9fafc5981dcac/640'},
  {key: 23, imgUrl: 'https://shp.qpic.cn/ttkg/130117453/250be7ed5872c6bc047e47ef83f9fafc5981acae/640'},
  {key: 24, imgUrl: ''},
  {key: 25, imgUrl: ''},
];
const list3 = [
  { key: 31, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/20161208093933b4dbb84c9e260e.jpg', src: 'http://video4.peiyinxiu.com/20181126181344d4dafb_f_1943387.mp4' },
  { key: 32, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/201404041803e7648d0b32e7e450.jpg', src: 'http://video4.peiyinxiu.com/201505111858fa44e4594e359702.mp4' },
  { key: 33, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/201405261108d1d40a588881e67a.jpg', src: 'http://video4.peiyinxiu.com/20150128080402d4b2eb5f35993a.mp4' },
  { key: 34, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/201602271737268421f855e68bf5.jpg', src: 'http://video4.peiyinxiu.com/201812081728019475f9_f_1943387.mp4' },
  { key: 35, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/201801222246a0e4d75b0daf863a.jpg', src: 'http://video4.peiyinxiu.com/2018012422437454632951f83d2d.mp4' },
  { key: 36, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/201505171727d6b4c019ff8fbcc6.jpg', src: 'http://video4.peiyinxiu.com/201805151717cdd40788d1be78e5.mp4' },
  { key: 37, isVideo: true, imgUrl: 'http://img4.peiyinxiu.com/2018051423104d14d4fb44cc86f0.jpg', src: 'http://video4.peiyinxiu.com/2019030420137a5456c9_f_1943387.mp4' },
];
const list4 = [10, 20, 30, 40, 50, 60];
const list5 = [10, 20, 30, 40, 50, 60];

const navList = [
  { key: 1, type: '工作', list: list1 },
  { key: 2, type: '主持', list: list2 },
  { key: 3, type: '配音', list: list3 },
  { key: 4, type: '运动', list: list4 },
  { key: 5, type: '旅游', list: list5 },
]

export default class Work extends Component {
  state = {
    active: 1,
    activeList: list1,
  }

  handleChangeListItem = item => () => {
    this.setState({
      active: item.key,
      activeList: item.list,
    });
  }

  render() {
    const { active, activeList } = this.state;
    const { handleChangeListItem } = this;

    return (
      <div>
        <h2 className={classnames('animated fadeInDown', styles.title)}>
          工作瞬间
        </h2>

        <ul className={styles.navList}>
          {navList.map(item => (
            <li
              className={classnames(styles.navListItem, { [styles.activeItem]: active === item.key })}
              key={item.key}
              onClick={handleChangeListItem(item)}
            >
              {item.type}
            </li>
          ))}
        </ul>

        <ul className={styles.list}>
          {activeList.map(item => (
            <li className={classnames('animated flipInX', styles.listItem)} key={item.key || item}>
              {item.isVideo ? (
                <video className={styles.video} poster={item.imgUrl} controls playsInline data-type="play">
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                  <img className={styles.image} src={item.imgUrl} alt="" />
                )}
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
