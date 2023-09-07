import React from 'react';
import styles from './emailSignUp.module.scss';
import Link from 'next/link';

interface SignUpOptionsProps {
  options: boolean;
  setOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailSignUp = ({setOptions}: SignUpOptionsProps) => {
  return (
    <div className={styles.signUp__authForm}>
      <button className={styles.signUp__back} onClick={() => (setOptions(true))}>
        <svg className={styles.signUp__icon}>
          <use href='/icons/symbol-defs.svg#icon-chevron-left'></use>
        </svg>
      </button>
      <h2 className={styles.signUp__headingSecondary}>Sign up to Colors</h2>
      <form className={styles.signUp__form}>
        <div className={styles.signUp__field}>
          <label className={styles.signUp__label} htmlFor='name'>Name</label>
          <input className={styles.signUp__input} type='text' id='name' placeholder='Eg. Pavitra Prabhakar' />
        </div>
        <div className={styles.signUp__field}>
          <label className={styles.signUp__label} htmlFor='email'>Email</label>
          <input className={styles.signUp__input} type='email' id='email' placeholder='abc@example.com' />
        </div>
        <div className={styles.signUp__field}>
          <label className={styles.signUp__label} htmlFor='password'>Password</label>
          <input className={styles.signUp__input} type='password' id='password' placeholder='6+ Characters' />
        </div>
        <p className={styles.signUp__disclaimer}>By Continuing, you agree to our <a href='/' className={styles.signUp__disclaimerLink}>Terms of Service.</a></p>
        <p className={styles.signUp__disclaimer}>Read our <a href='/' className={styles.signUp__disclaimerLink}>Privacy Policy.</a></p>
        <button className={styles.signUp__button}>
          Create Account
        </button>
        <p className={styles.signUp__signIn}>
            Already have an account? <Link href='/sign_in' className={styles.signUp__signInLink}>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default EmailSignUp;