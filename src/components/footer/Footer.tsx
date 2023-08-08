import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__menu}>
        <div className={styles.footer__list}>
          <ul>
            <li className={styles.footer__heading}>Tools</li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Generate Your Palettes</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Explore Plaettes</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Random Palette Generator</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Contrast Checker</Link>
              <span className={`${styles.footer__cardBadge} ${styles["footer__cardBadge--2"]}`}>soon</span>
            </li>
          </ul>
        </div>
        <div className={styles.footer__list}>
          <ul>
            <li className={styles.footer__heading}>More</li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>List of Colors</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Browse Gradients</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Make a Gradient Palette</Link>
              <span className={`${styles.footer__cardBadge} ${styles["footer__cardBadge--5"]}`}>soon</span>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Become a Contributor</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__list}>
          <ul>
            <li className={styles.footer__heading}>Apps</li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Chrome Extension</Link>
              <span className={`${styles.footer__cardBadge} ${styles["footer__cardBadge--1"]}`}>soon</span>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Instagram Page</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Mobile App</Link>
              <span className={`${styles.footer__cardBadge} ${styles["footer__cardBadge--3"]}`}>soon</span>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>LinkedIn Page</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__list}>
          <ul>
            <li className={styles.footer__heading}>Company</li>
            <li className={styles.footer__item}>
              <Link href='/' className={styles.footer__link}>Privacy Policy</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Terms and Conditions</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Help Center</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>About Us</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Contact Us</Link>
            </li>
            <li className={styles.footer__item} >
              <Link href='/' className={styles.footer__link}>Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <span className={styles.footer__credits}>
                    © palettee by <a href='https://yashfalke77.netlify.app/' className={styles.footer__creditsName}>Yash Falke</a>.
                    From a creative to all others
        </span>
        <div className={styles.footer__mediaIcon}>
          <a href='https://www.instagram.com/yashfalke77/' target='_blank' rel='noreferrer'>
            <svg className={styles.footer__icon}>
              <use href='/icons/symbol-defs.svg#icon-instagram'></use>
            </svg>
          </a>
          <a href='https://www.youtube.com/channel/UCax8or2_bzQCHe0GdSLITOA' target='_blank' rel='noreferrer'>
            <svg className={styles.footer__icon}>
              <use href='/icons/symbol-defs.svg#icon-youtube'></use>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/yashfalke77/' target='_blank' rel='noreferrer'>
            <svg className={styles.footer__icon}>
              <use href='/icons/symbol-defs.svg#icon-linkedin-with-circle'></use>
            </svg>
          </a>
          <a href='https://codepen.io/yashfalke77' target='_blank' rel='noreferrer'>
            <svg className={styles.footer__icon}>
              <use href='/icons/symbol-defs.svg#icon-codepen'></use>
            </svg>
          </a>
          <a href='https://github.com/yashfalke77' target='_blank' rel='noreferrer'>
            <svg className={styles.footer__icon}>
              <use href='/icons/symbol-defs.svg#icon-github'></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;