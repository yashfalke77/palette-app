import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={`${styles.spinner} ${styles["spinner--1"]}`}></div>
    </div>
  );
};

export default Loading;