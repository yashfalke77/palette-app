"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './search.module.scss';

const Search = () => {
  const [focus, setFocus] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refSearch: any = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (refSearch.current && !refSearch.current.contains(evt.target)) {
        setFocus(false);
      }
    });
  }, []);

  const sty = ["warm", "cold bright", "pastel", "vintage", "monochromatic", "gradient", "2 colors", "3 colors", "4 colors", "5 colors", "6 colors", "7 colors", "halloween", "wedding", "christmas",
    "kids", "happy", "cold", "fall", "sunset", "winter", "space", "night"
  ];

  const colors = [
    { name: "red", color: "red" },
    { name: "violet", color: "violet" },
    { name: "green", color: "green" },
    { name: "blue", color: "blue" },
    { name: "indigo", color: "indigo" },
    { name: "orange", color: "orange" },
    { name: "yellow", color: "yellow" },
    { name: "pink", color: "pink" },
    { name: "black", color: "black" },
    { name: "white", color: "white" },
    { name: "teal", color: "teal" },
    { name: "brown", color: "brown" },
    { name: "peru", color: "peru" },
    { name: "maroon", color: "maroon" },
    { name: "purple", color: "purple" },
  ];


  return (
    <div>
      <header className={styles.header}>
        <div className={styles.search} >
          <form className={styles.search__form} ref={refSearch}>
            <button className={styles.search__iconButton}>
              <svg className={styles.search__icon}>
                <use href='/icons/symbol-defs.svg#icon-search'></use>
              </svg>
            </button>
            <input type='text' onFocus={() => (setFocus(true))} className={styles.search__input} placeholder='Search with colors, topic, styles or hex values...' />
            {focus && (
              <div className={styles.search__options}>
                <section className={styles.search__sectionColor}>
                  <h4 className={styles.search__headingTertiary}>Colors</h4>
                  <div className={styles.search__optionsLinks}>
                    {colors.map((color, i) => (
                      <Link href='/' key={i} className={styles.search__colorsButton} >
                        <label style={{ backgroundColor: color.color }} className={styles.search__colorsLogo}></label>
                        <label className={styles.search__colorsText}>{color.name}</label>
                      </Link>
                    ))}
                  </div>
                </section>
                {/* <div className={styles.line}></div> */}
                <section className={styles.search__sectionStyles}>
                  <h3 className={styles.search__headingTertiary}>Collections</h3>
                  <div className={styles.search__optionsLinks}>
                    {sty.map((s, i) => (
                      <Link href='/' key={i} className={styles.search__colorsButton}>
                        <label className={styles.search__colorsText}>{s}</label>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </form>
        </div>

        <div className={styles.search__suggestion}>
          <ul className={styles.search__list}>
            <li className={styles.search__item}>
              <Link href='/palettes' className={styles.search__link}>
                                Popular
              </Link>
            </li>
            <li className={styles.search__item}>
              <Link href='/' className={styles.search__link}>
                                Trending
              </Link>
            </li>
            <li className={styles.search__item}>
              <Link href='/' className={styles.search__link}>
                                Latest
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Search;