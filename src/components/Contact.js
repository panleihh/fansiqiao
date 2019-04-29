import React, { Component } from 'react';
import classnames from 'classnames';

import { BMAP_ANIMATION_BOUNCE } from '../common/bMap_data';

import '../style/animate.css';
import styles from './Contact.module.css';

const list = [
  { icon: 'home', value: '北京市朝阳区将台路' },
  { icon: 'phone', value: '188600946777' },
  { icon: 'envelope', value: 'fan_sqiao@163.com' },
]

export default class Contact extends Component {

  componentDidMount() {
    const BMap = window.BMap;
    const map = new BMap.Map("allmap"); // 创建Map实例
    const point = new BMap.Point(116.496253, 39.97696);

    map.centerAndZoom(point, 12); // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.addControl(new BMap.ScaleControl()); //添加比例尺控件

    // const Icon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(100, 100) );  //设置标注的图标
    // const marker = new BMap.Marker(new BMap.Point(116.496253, 39.97696), { icon: Icon });  //设置标注的经纬度
    const marker = new BMap.Marker(point);
    map.addOverlay(marker); //把标注添加到地图上
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    const sContent = "朝阳区将台路";
    var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, point); //开启信息窗口

    marker.addEventListener("click", function () {
      this.openInfoWindow(infoWindow);
      //图片加载完毕重绘infowindow
      // document.getElementById('imgDemo').onload = function (){
      //   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
      // }
    });
  }

  render() {

    return (
      <div>
        <h2 className={classnames('animated fadeInDown', styles.title)}>
          联系我
        </h2>

        <div className={styles.map}>
          <div id="allmap" style={{ width: "100%", height: "100%" }} />
        </div>

        <ul className={styles.list}>
          {list.map(item => (
            <li className={styles.listItem} key={item.icon}>
              <i className={classnames("fa", `fa-${item.icon}`, styles.listItemIcon)} />
              {item.icon === 'phone' ? (
                <a className={styles.listItemLink} href={`tel://${item.value}`}>{item.value}</a>
              ): (
                item.value
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}