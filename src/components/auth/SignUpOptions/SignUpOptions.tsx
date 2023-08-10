import React from 'react';
import styles from './signUpOptions.module.scss';

interface SignUpOptionsProps {
  options: boolean;
  setOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpOptions = ({setOptions}: SignUpOptionsProps) => {
  return (
    <div className={styles.signUp__authContent}>
      <h2 className={styles.signUp__headingSecondary}>Sign up to Palettee</h2>
      <a href='/' className={styles.signUp__google}>
        <svg className={styles.signUp__icon}>
          <use href='/icons/symbol-defs.svg#icon-google'></use>
        </svg>
        <span className={styles.signUp__googleText}>Sign up with Google</span>
      </a>
      <hr className={styles.signUp__divider} ></hr>
      <button className={styles.signUp__email} onClick={() => (setOptions(false))}>Continue with Email</button>
      <p className={styles.signUp__disclaimer}>
            By creating an account, you agree to Palettee&apos;s <a href='/' className={styles.signUp__disclaimerLink}>Terms of Service</a> and <a href='/' className={styles.signUp__disclaimerLink}>Privacy Policy </a>
             and our default <a href='/' className={styles.signUp__disclaimerLink}>Notification Settings</a>.
      </p>
      <p className={styles.signUp__signIn}>
            Already have an account? <a href='/' className={styles.signUp__signInLink}>Sign In</a>
      </p>
    </div>
  );
};

export default SignUpOptions;