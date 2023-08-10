"use client";
import React, { useState } from 'react';
import styles from './signUp.module.scss';
import Link from 'next/link';
import SignUpOptions from '@/components/auth/SignUpOptions/SignUpOptions';
import EmailSignUp from '@/components/auth/EmailSignUp/EmailSignUp';

const Page = () => {
  const [options, setOptions] = useState(true);
  return (
    <main className={styles.signUp}>

      <section className={styles.signUp__sidebarContent}>
        <Link href='/' className={styles.signUp__logo} >Palettee</Link>
        <video playsInline={true} className={styles.signUp__video} autoPlay={true} loop={true} muted={true} src='https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515'>
        </video>
        <span className={styles.signUp__desc}>Creation Starts Here</span>
      </section>

      <section className={styles.signUp__mainContainer}>
        {options ? (<SignUpOptions options={options} setOptions={setOptions} />) : (<EmailSignUp />)}
      </section>
    </main>
  );
};

export default Page;