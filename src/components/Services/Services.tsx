import React from 'react';
import styles from './services.module.scss';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__head}>
        <h1 className={styles.services__headingPrimary}>Our Services</h1>
        <p className={styles.services__description}>Following are the service that we provide that helps you to do your
                work more fluently and easily and increase your daily productivity.</p>
      </div>
      <div className={styles.services__body}>
        <a href='https://www.instagram.com/yashfalke77/' target='_blank' rel='noreferrer'>
          <div className={`${styles.services__card} ${styles["services__card--1"]}`}>
            <div className={styles.services__cardOuter}>
              <svg className={styles.services__cardIcon}>
                <use href='/icons/symbol-defs.svg#icon-instagram'></use>
              </svg>
              <h3 className={styles.services__headingTertiary}>Instagram</h3>
              <p className={styles.services__cardDescription}>
                Get Your daily inspiration of beautiful palettes.
              </p>
            </div>
            <div className={styles.services__cardInner}>
              <span className={`${styles.services__headingSecondary} ${styles["services__cardHover--1"]}`}>
                Follow us
              </span>
            </div>
          </div>
        </a>

        <a href='/' target='_blank' rel='noreferrer'>
          <div className={`${styles.services__card} ${styles["services__card--2"]}`}>
            <div className={styles.services__cardOuter}>
              <span className={`${styles.services__cardBadge} ${styles["services__cardBadge--2"]}`}>soon</span>
              <svg className={styles.services__cardIcon}>
                <use href='/icons/symbol-defs.svg#icon-android'></use>
              </svg>
              <h3 className={styles.services__headingTertiary}>Android App</h3>
              <p className={styles.services__cardDescription}>
                                Thousands of palletes in your pocket
              </p>
            </div>
            <div className={styles.services__cardInner}>
              <span className={`${styles.services__headingSecondary} ${styles["services__cardHover--2"]}`}>
                                View on play store
              </span>
            </div>
          </div>
        </a>

        <a
          href='https://www.linkedin.com/in/yashfalke77/'
          target='_blank'
          rel='noreferrer'>
          <div className={`${styles.services__card} ${styles["services__card--3"]}`}>
            <div className={styles.services__cardOuter}>
              <svg className={styles.services__cardIcon}>
                <use href='/icons/symbol-defs.svg#icon-linkedin-with-circle'></use>
              </svg>
              <h3 className={styles.services__headingTertiary}>Linkedin</h3>
              <p className={styles.services__cardDescription}>
                                Get info about what next feature is coming.
              </p>
            </div>
            <div className={styles.services__cardInner}>
              <span className={`${styles.services__headingSecondary} ${styles["services__cardHover--3"]}`}>
                                Connect us
              </span>
            </div>
          </div>
        </a>

        <a href='/' target='_blank' rel='noreferrer'>
          <div className={`${styles.services__card} ${styles["services__card--4"]}`}>
            <div className={styles.services__cardOuter}>
              <span className={`${styles.services__cardBadge} ${styles["services__cardBadge--4"]}`}>soon</span>
              <svg className={styles.services__cardIcon}>
                <use href='/icons/symbol-defs.svg#icon-chrome'></use>
              </svg>
              <h3 className={styles.services__headingTertiary}>Chrome Extension</h3>
              <p className={styles.services__cardDescription}>
                                Get and edit pallete on every new tab.
              </p>
            </div>
            <div className={styles.services__cardInner}>
              <span className={`${styles.services__headingSecondary} ${styles["services__cardHover--4"]}`}>
                                Add to chrome
              </span>
            </div>
          </div>
        </a>

        <a href='/' target='_blank' rel='noreferrer'>
          <div className={`${styles.services__card} ${styles["services__card--5"]}`}>
            <div className={styles.services__cardOuter}>
              <span className={`${styles.services__cardBadge} ${styles["services__cardBadge--5"]}`}>soon</span>
              <svg className={styles.services__cardIcon}>
                <use href='/icons/symbol-defs.svg#icon-figma'></use>
              </svg>
              <h3 className={styles.services__headingTertiary}>Figma Plugin</h3>
              <p className={styles.services__cardDescription}>
                                All Palletes right into your workspace
              </p>
            </div>
            <div className={styles.services__cardInner}>
              <span className={`${styles.services__headingSecondary} ${styles["services__cardHover--5"]}`}>
                                Install now
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Services;