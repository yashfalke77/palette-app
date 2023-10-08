import React from 'react';
import styles from './socialGoogle.module.scss';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import toast from 'react-hot-toast';

const SocialGoogle = () => {
  const supabase = createClientComponentClient();

  const googleLogin = async () => {
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
    if (error) {
      toast.error(error.message, {
        style: {
          borderRadius: '100px',
          background: '#000',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '10px',
          paddingBottom: '10px',
          color: '#fff',
        }
      });
    }
  };
  return (
    <div>
      <button className={styles.google__button} onClick={googleLogin}>
        <svg className={styles.google__icon}>
          <use href='/icons/symbol-defs.svg#icon-google'></use>
        </svg>
        <span className={styles.google__text}>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialGoogle;