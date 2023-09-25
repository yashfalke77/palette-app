import React from 'react';
import errorImage from '../../../public/Images/error.png';
import Image from 'next/image';
import styles from './errorDisplay.module.scss';

const ErrorDisplay = ({message}: {message: string}) => {
  return (
    <div className={styles.error}>
      <Image src={errorImage} width={300} alt='Error Image' />
      <span className={styles.error__message}>Something Went Wrong: {message}</span>
    </div>
  );
};

export default ErrorDisplay;