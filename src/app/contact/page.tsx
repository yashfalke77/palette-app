import React from 'react';
import styles from './contact.module.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.contact}>
        <div className={styles.contact__heading}>
          <h1 className={styles.contact__headingPrimary}>Get In Touch</h1>
          <p className={styles.contact__desc}>I love to talk with you</p>
        </div>
        <div className={styles.contact__body}>
          <div className={styles.contact__item}>
            <div className={styles.contact__itemLabel}>Support</div>
            <div className={styles.contact__itemBig}>yashfalke77@gmail.com</div>
            <div className={styles.contact__itemP}>You can also look at our Help Center</div>
          </div>
          <div className={styles.contact__item}>
            <div className={styles.contact__itemLabel}>Info</div>
            <div className={styles.contact__itemBig}>info@Colors.com</div>
            <div className={styles.contact__itemP}>Drop us a line if you have suggestions</div>
          </div>
          <div className={styles.contact__item}>
            <div className={styles.contact__itemLabel}>About</div>
            <div className={styles.contact__itemBig}>Made By Yash Falke</div>
            <div className={styles.contact__itemP}>Created during a weekend as Personal Project it&apos;s now the essential tool for millions of amazing creatives.</div>
          </div>
          <div className={styles.contact__item}>
            <div className={styles.contact__itemLabel}>Company</div>
            <div className={styles.contact__itemBig}>Colors</div>
            <div className={styles.contact__itemP}>Mumbai, Maharashtra, India.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;