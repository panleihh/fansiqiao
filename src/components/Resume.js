import React, { Component } from 'react';

import styles from './Resume.module.css';

const EducationList = [
  { title: 'Academy of Art University', time: '2001-2004', desc: "Academy of Art University's School of Web Design & New Media is the intersection between traditional design and new technologies." },
  { title: 'IT Technical Institute', time: '1995-2001', desc: "Academy of Art University's School of Web Design & New Media is the intersection between traditional design and new technologies." },
  { title: 'Web Design School', time: '1994-1995', desc: "Academy of Art University's School of Web Design & New Media is the intersection between traditional design and new technologies." },
]

const skillsList = [
  { title: 'Wordpress Development', percent: '71%' },
  { title: 'Photoshop', percent: '85%' },
  { title: 'html5/css3', percent: '76%' },
  { title: 'puby on rails', percent: '53%' },
  { title: 'social marketing', percent: '69%' },
]

export default class Resume extends Component {

  render() {
    return (
      <div>
        <h2 className={styles.title}>
          Resume
        </h2>

        <section>
          <h4 className={styles.sectionTitle}>Education</h4>
          <div className={styles.line2} />
          <ul className={styles.sectionList}>
            {EducationList.map(item => (
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

        <section>
          <h4 className={styles.sectionTitle}>Work Experience</h4>
          <div className={styles.line2} />
          <ul className={styles.sectionList}>
            {EducationList.map(item => (
              <li className={styles.sectionListItem} key={item.time}>
                <h5 className={styles.itemTitle}>{item.title}</h5>
                <span className={styles.itemTime}>{item.time}</span>
                <p className={styles.itemDesc}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}