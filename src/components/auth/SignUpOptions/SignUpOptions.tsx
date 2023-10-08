import React from 'react';
import styles from './signUpOptions.module.scss';
import Link from 'next/link';
import SocialGoogle from '../SocialGoogle/SocialGoogle';

interface SignUpOptionsProps {
  options: boolean;
  setOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpOptions = ({setOptions}: SignUpOptionsProps) => {
  return (
    <div className={styles.signUp__authContent}>
      <h2 className={styles.signUp__headingSecondary}>Sign up to Colors</h2>
      <SocialGoogle />
      <hr className={styles.signUp__divider} ></hr>
      <button className={styles.signUp__email} onClick={() => (setOptions(false))}>Continue with Email</button>
      <p className={styles.signUp__disclaimer}>
            By creating an account, you agree to Palettee&apos;s <a href='/' className={styles.signUp__disclaimerLink}>Terms of Service</a> and <a href='/' className={styles.signUp__disclaimerLink}>Privacy Policy </a>
             and our default <a href='/' className={styles.signUp__disclaimerLink}>Notification Settings</a>.
      </p>
      <p className={styles.signUp__signIn}>
            Already have an account? <Link href='/sign_in' className={styles.signUp__signInLink}>Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpOptions;