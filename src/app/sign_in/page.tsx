import React from 'react';
import styles from './signIn.module.scss';
import Link from 'next/link';


const page = () => {
  return (
    <main className={styles.signIn}>

      <section className={styles.signIn__sidebarContent}>
        <Link href='/' className={styles.signIn__logo} >
          Colors
        </Link>
        <video playsInline={true} className={styles.signIn__video} autoPlay={true} loop={true} muted={true} src='https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949'>
        </video>
        <span className={styles.signIn__desc}>Creation Starts Here</span>
      </section>

      <section className={styles.signIn__mainContainer}>
        <div className={styles.signIn__authContent}>
          <h2 className={styles.signIn__headingSecondary}>Sign up to Colors</h2>
          <a href='/' className={styles.signIn__google}>
            <svg className={styles.signIn__icon}>
              <use href='/icons/symbol-defs.svg#icon-google'></use>
            </svg>
            <span className={styles.signIn__googleText}>Sign up with Google</span>
          </a>
          <hr className={styles.signIn__divider} ></hr>
          <form className={styles.signIn__form}>
            <div className={styles.signIn__field}>
              <label className={styles.signIn__label} htmlFor='email'>Email</label>
              <input className={styles.signIn__input} type='email' id='email' placeholder='abc@example.com' />
            </div>
            <div className={styles.signIn__field}>
              <label className={styles.signIn__label} htmlFor='password'>Password</label>
              <input className={styles.signIn__input} type='password' id='password' placeholder='6+ Characters' />
            </div>
            <button className={styles.signIn__button}>
                Create Account
            </button>
            <p className={styles.signIn__signUp}>
                Don&apos;t have an account? <Link href='/sign_up' className={styles.signIn__signUpLink}>Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;