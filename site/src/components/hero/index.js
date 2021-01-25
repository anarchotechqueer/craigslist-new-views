import React from 'react';
import styles from './hero.module.scss';
import img1 from '../../img/slider/1.png';
import img2 from '../../img/slider/2.png';
import img3 from '../../img/slider/3.png';
import img4 from '../../img/slider/4.png';

export default function Hero({color}) {
  return (
    <div className={styles.hero}>
      <div class={styles.content}>
        <div className={styles.title}>view new results</div>

        <div className={styles.subtitle}>ignore old ones</div>

        <a target="_blank" rel="noreferrer" href="https://chrome.google.com/webstore/detail/craigslist-new-views/mpkmnnbdgbaddfngokdcdojhdakjhenm/" className={styles.cta}>Install for Chrome</a>
      </div>

      <div className={styles.example}>
        <section class="facade-minimal" data-url="austin.craigslist.org">
          <div class="slider">
            <img alt="" src={img1} />
            <img alt="" src={img2} />
            <img alt="" src={img3} />
            <img alt="" src={img4} />
          </div>
        </section>
      </div>
    </div>
  );
};
