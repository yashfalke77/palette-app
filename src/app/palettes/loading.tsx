import Loading from '@/components/loading/Loading';
import React from 'react';
import styles from './palettes.module.scss';

const loading = () => {
  return (
    <div className={styles.loading}>
      <Loading />
    </div>
  );
};

export default loading;