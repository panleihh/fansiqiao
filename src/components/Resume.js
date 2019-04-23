import React, { Component } from 'react';

import styles from './Resume.module.css';

const schoolList = [
  { title: '代表我校到广州招生', time: '2016.05', desc: '随我院学工办主任到广州参加全国高校招生宣传会' },
  { title: '市领导的接待、讲解', time: '2016.04', desc: '省、市领检查我院微科创新创业基地时负责讲解接待' },
  { title: '院学生会主席', time: '2015-2016', desc: '负责全院学生工作的正常开展，加强创新，推行每周一星，获得了2015年度学生工作先进单位' },
  { title: '校广播电视台播音部部长、院文艺部部长', time: '2014-2015', desc: '开发并制作学校广播节目、举办学院大型文艺晚会，如迎新晚会、女生节晚会、毕业晚会等，主持省级比赛' },
  { title: '院团总支书记兼学生分会主席', time: '2013-2014', desc: '管理大一年级的日常事务，积极参加学校各类文体活动，运动会、主持人大赛，并加入学校声乐部参加省级比赛' },
]

const preWorkList = [
  { title: '北京神州数码渠道销售实习生', time: '2016-2017.05', desc: '帮助并学习了合同提系统、提销售、提盖章；协同制作了标书；担任年会主持人' },
  { title: '联想北京总部联想社区运营实习生', time: '2016.09-2016.11', desc: '做每周的KPI统计，各区域每周发回贴统计；社区首页banner和推荐内容，编辑与整理活动帖子；联想公司的大型产品推荐会出任接待员；统计核查了2万行的电脑延保是否超期及回撤；担任《联想情报局》男主持，《联想黑金》驻场客串' },
]

const workList = [
  { title: '普天科创实业有限公司园区运营部商务专员，兼任机关联合团支部书记、机关工会文体委员', time: '2017.07-至今', desc: 'lalalla' },
]

const skillsList = [
  { title: '策划能力', percent: '85%' },
  { title: '管理能力', percent: '90%' },
  { title: '执行能力', percent: '90%' },
  { title: '语言能力', percent: '95%' },
]

export default class Resume extends Component {

  render() {
    return (
      <div>
        <h2 className={styles.title}>
          Resume
        </h2>
        
        <section>
          <h4 className={styles.sectionTitle}>工作经历</h4>
          <div className={styles.line2} />
          <ul className={styles.sectionList}>
            {workList.map(item => (
              <li className={styles.sectionListItem} key={item.time}>
                <h5 className={styles.itemTitle}>{item.title}</h5>
                <span className={styles.itemTime}>{item.time}</span>
                <p className={styles.itemDesc}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className={styles.sectionTitle}>实习工作经历</h4>
          <div className={styles.line2} />
          <ul className={styles.sectionList}>
            {preWorkList.map(item => (
              <li className={styles.sectionListItem} key={item.time}>
                <h5 className={styles.itemTitle}>{item.title}</h5>
                <span className={styles.itemTime}>{item.time}</span>
                <p className={styles.itemDesc}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className={styles.sectionTitle}>学生工作经历</h4>
          <div className={styles.line2} />
          <ul className={styles.sectionList}>
            {schoolList.map(item => (
              <li className={styles.sectionListItem} key={item.title}>
                <h5 className={styles.itemTitle}>{item.title}</h5>
                <span className={styles.itemTime}>{item.time}</span>
                <p className={styles.itemDesc}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className={styles.sectionTitle}>Skills</h4>
          <div className={styles.line2} />
          <ul className={styles.sectionList}>
            {skillsList.map(item => (
              <li className={styles.skillsListItem} key={item.title}>
                <p className={styles.skillsItemTitle}>
                  {item.title}
                  <span className={styles.skillsItemNum}>{item.percent}</span>
                </p>
                <div className={styles.skillsItemBg}>
                  <span className={styles.skillsItemBgSpan} style={{ width: `${item.percent}` }} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}