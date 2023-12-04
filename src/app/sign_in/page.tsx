"use client";
import React, {useState} from 'react';
import styles from './signIn.module.scss';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
import LoadingLight from '@/components/loading/LoadingLight';
import SocialGoogle from '@/components/auth/SocialGoogle/SocialGoogle';


const Page = () => {
  const supabase = createClientComponentClient();
  // const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password,
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
      setLoading(false);
      window.location.replace('/');
      // -- temp fix for state not changing on redirect to home, fix it when using any state management library.
      // router.push('/');
      // toast.success('Logged In Successfully! ', {
      //   style: {
      //     borderRadius: '100px',
      //     background: '#000',
      //     paddingLeft: '16px',
      //     paddingRight: '16px',
      //     paddingTop: '10px',
      //     paddingBottom: '10px',
      //     color: '#fff',
      //   },
      // });
    }
  };

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
          <h2 className={styles.signIn__headingSecondary}>Sign in to Colors</h2>
          <SocialGoogle />
          <hr className={styles.signIn__divider} ></hr>
          <form className={styles.signIn__form} onSubmit={handleSubmit}>
            <div className={styles.signIn__field}>
              <label className={styles.signIn__label} htmlFor='email'>Email</label>
              <input className={styles.signIn__input} required value={formValues.email} onChange={handleChange} type='email' id='email' placeholder='abc@example.com' />
            </div>
            <div className={styles.signIn__field}>
              <label className={styles.signIn__label} htmlFor='password'>Password</label>
              <input className={styles.signIn__input} required value={formValues.password} onChange={handleChange} type='password' id='password' placeholder='6+ Characters' />
            </div>
            <button className={styles.signIn__button}>
              {loading ? (<LoadingLight />) : ('Sign in')}
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

export default Page;