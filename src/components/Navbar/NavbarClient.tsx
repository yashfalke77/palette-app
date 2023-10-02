/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import exploreIcon from '../../../public/Icons/explore-palette.png';
import paletteGeneratorIcon from '../../../public/Icons/generate.svg';
import randomGeneratorIcon from '../../../public/Icons/charging-battery.png';
import contributorIcon from '../../../public/Icons/charity.png';
import logo from '../../../public/Images/logo.png';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const NavbarClient = ({session}: {session: Session | null}) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const toolsRef: any = useRef(null);

  // states
  const [toolOptions, setToolOptions] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (toolsRef.current && !toolsRef.current.contains(evt.target)) {
        setToolOptions(false);
      }
    });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    toast.success('Logged out Successfully! ', {
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
    router.refresh();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__left}>
        <Link className={styles.nav__logo} href='/'>
          <Image src={logo} width={140} alt='logo' />
        </Link>
      </div>

      <div className={styles.nav__right}>
        <div className={styles.nav__info}>
          <div className={styles.tools} ref={toolsRef}>
            <button className={styles.tools__menu} onClick={() => (setToolOptions(!toolOptions))}>Tools</button>
            {toolOptions && (<section className={styles.tools__options}>
              <div className={styles.tools__optionsLeft}>
                <ul className={styles.tools__mainOptList}>
                  <li>
                    <Link className={`${styles.tools__mainOptLink} ${styles.tools__mainOptLink__1}`} href='/palettes'>
                      <Image src={exploreIcon} width={55} height={55} quality={100} alt='explore palettes' />
                      <div>
                        <span className={`${styles.tools__mainOptText} ${styles.tools__mainOptText__1}`}>Explore Palettes</span>
                        <span className={styles.tools__mainOptDesc}>Browse millions of trending schemes.</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${styles.tools__mainOptLink} ${styles.tools__mainOptLink__2}`} href='/new'>
                      <Image src={paletteGeneratorIcon} width={55} height={55} alt='generate palettes' />
                      <div>
                        <span className={`${styles.tools__mainOptText} ${styles.tools__mainOptText__2}`}>Generate Palettes</span>
                        <span className={styles.tools__mainOptDesc}>Create your customized palettes.</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${styles.tools__mainOptLink} ${styles.tools__mainOptLink__3}`} href='/'>
                      <Image src={randomGeneratorIcon} width={55} height={55} alt='randomly generate palettes' />
                      <div>
                        <span className={`${styles.tools__mainOptText} ${styles.tools__mainOptText__3}`}>Random Generator</span>
                        <span className={styles.tools__mainOptDesc}>Create your palettes in seconds</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${styles.tools__mainOptLink} ${styles.tools__mainOptLink__4}`} href='/'>
                      <Image src={contributorIcon} width={55} height={55} alt='Become Contributor' />
                      <div>
                        <span className={`${styles.tools__mainOptText} ${styles.tools__mainOptText__4}`}>Become Contributor</span>
                        <span className={styles.tools__mainOptDesc}>Showcase your palettes to world.</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.tools__optionsRight}>
                <ul>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>List of colors</Link>
                  </li>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>Color Picker</Link>
                  </li>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/contact' className={styles.tools__otherOptLink}>Contact Us</Link>
                  </li>
                </ul>
                <h4 className={styles.tools__otherOptHeading}>
                  App
                </h4>
                <ul>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>Chrome Extension</Link>
                    <span className={`${styles.tools__cardBadge} ${styles["tools__cardBadge--1"]}`}>soon</span>
                  </li>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>Linkedin Page</Link>
                  </li>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>Android App</Link>
                    <span className={`${styles.tools__cardBadge} ${styles["tools__cardBadge--2"]}`}>soon</span>
                  </li>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>Instagram Page</Link>
                  </li>
                  <li className={styles.tools__otherOptItem}>
                    <Link href='/' className={styles.tools__otherOptLink}>Open Source</Link>
                  </li>
                </ul>
              </div>
            </section>)}
          </div>
          <Link className={styles.nav__link} href='/contact'>Contact</Link>
        </div>

        <span className={styles.nav__divider}></span>

        {session === null &&
        (<div className={styles.nav__auth}>
          <Link className={styles.nav__link} href='/sign_in'>Sign In</Link>
          <Link className={styles.nav__btnRound} href='/sign_up'>Join us</Link>
        </div>)}

        {session !== null &&
        (<div className={styles.nav__auth}>
          <Link className={styles.nav__link} href='/profile'>Hi, {session?.user.user_metadata.name}</Link>
          <button className={styles.nav__btnRound} onClick={logout}>Sign out</button>
        </div>)}
      </div>
    </nav>
  );
};

export default NavbarClient;