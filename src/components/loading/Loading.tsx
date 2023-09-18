import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={`${styles.spinner} ${styles["spinner--1"]}`}></div>
  );
};

export default Loading;