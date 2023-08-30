import React from 'react';
import Link from 'next/link';
import styles from './heroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__right}></div>
      <div className={styles.hero__left}>
        <h1 className={styles.hero__headingPrimary}>
            The super fast color palettes generator!
        </h1>
        <p className={styles.hero__description}>
        Discover the ideal palette or draw inspiration from an array of stunning color schemes.
        </p>
        <div className={styles.hero__buttons}>
          <Link href='/' className={styles.hero__btnRound}>Start the generator</Link>
          <Link href='/palettes' className={styles.hero__btnOutline}>Explore trending palettes</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;