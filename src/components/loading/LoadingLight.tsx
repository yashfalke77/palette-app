import React from 'react';
import styles from './loading.module.scss';

const LoadingLight = () => {
  return (
    <div className={`${styles.spinnerLight} ${styles["spinnerLight--1"]}`}></div>
  );
};

export default LoadingLight;