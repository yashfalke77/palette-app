'use client';
import React, {useState} from 'react';
import styles from './emailSignUp.module.scss';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import LoadingLight from '@/components/loading/LoadingLight';
import toast from 'react-hot-toast';

interface SignUpOptionsProps {
  options: boolean;
  setOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailSignUp = ({setOptions}: SignUpOptionsProps) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: formValues.email,
      password: formValues.password,
      options: {
        data: {
          name: formValues.name
        }
      }
    });
    if (error) {
      setLoading(false);
      toast.error(error.message, {
        style: {
          borderRadius: '100px',
          background: '#000',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '10px',
          paddingBottom: '10px',
          color: '#fff',
        },
      });
    } else if (data?.user) {
      await supabase.auth.signInWithPassword({
        email: formValues.email,
        password: formValues.password
      });
      setLoading(false);
      toast.success('Logged In successfully!', {
        style: {
          borderRadius: '100px',
          background: '#000',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '10px',
          paddingBottom: '10px',
          color: '#fff',
        },
      });
      router.push('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className={styles.signUp__authForm}>
      <button className={styles.signUp__back} onClick={() => (setOptions(true))}>
        <svg className={styles.signUp__icon}>
          <use href='/icons/symbol-defs.svg#icon-chevron-left'></use>
        </svg>
      </button>
      <h2 className={styles.signUp__headingSecondary}>Sign up to Colors</h2>
      <form className={styles.signUp__form} onSubmit={handleSubmit}>
        <div className={styles.signUp__field}>
          <label className={styles.signUp__label} htmlFor='name'>Name</label>
          <input className={styles.signUp__input} required onChange={handleChange} value={formValues['name']} type='text' id='name' placeholder='Eg. Pavitra Prabhakar' />
        </div>
        <div className={styles.signUp__field}>
          <label className={styles.signUp__label} htmlFor='email'>Email</label>
          <input className={styles.signUp__input} required onChange={handleChange} value={formValues['email']} type='email' id='email' placeholder='abc@example.com' />
        </div>
        <div className={styles.signUp__field}>
          <label className={styles.signUp__label} htmlFor='password'>Password</label>
          <input className={styles.signUp__input} required onChange={handleChange} value={formValues['password']} type='password' id='password' placeholder='6+ Characters' />
        </div>
        <p className={styles.signUp__disclaimer}>By Continuing, you agree to our <a href='/' className={styles.signUp__disclaimerLink}>Terms of Service.</a></p>
        <p className={styles.signUp__disclaimer}>Read our <a href='/' className={styles.signUp__disclaimerLink}>Privacy Policy.</a></p>
        <button className={styles.signUp__button}>
          {loading ? (<LoadingLight />) : ('Create Account')}
        </button>
        <p className={styles.signUp__signIn}>
            Already have an account? <Link href='/sign_in' className={styles.signUp__signInLink}>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default EmailSignUp;