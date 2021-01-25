import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/anarchotechslut/craigslist-new-views" target="_blank"  rel="noreferrer noopenner">github</a>
      <div className={styles.text}>
        created by <span>nova skye</span>
      </div>
    </div>
  );
};
