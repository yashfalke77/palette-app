/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import styles from './viewPalette.module.scss';
import Link from 'next/link';
import { PaletteModel } from '@/models/palette.model';
import ColorBoxDetailed from '@/components/ColorBoxDetailed/ColorBoxDetailed';
import { generateDifferentUnit } from '@/utils/colorHelper';
import Palette from '@/components/Palette/Palette';

interface ViewPaletteProps {
  palette: PaletteModel | null;
  randomPalettes: any;
}

const ViewPalette = ({palette, randomPalettes}: ViewPaletteProps) => {
  const [colorUnit, setColorUnit] = React.useState("hex");
  const [unitDropdown, setUnitDropdown] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);

  const unitRef: any = React.useRef();
  const ref: any = React.useRef();

  React.useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (unitRef.current && !unitRef.current.contains(evt.target)) {
        setUnitDropdown(false);
      }
      if (ref.current && !ref.current.contains(evt.target)) {
        setDropDown(false);
      }
    });
  }, []);

  const paletteWithAllUnits = generateDifferentUnit(palette!);

  return (
    <div className={styles.view}>
      <section className={styles.view__head}>
        <h1 className={styles.view__headingPrimary}>Palette</h1>
        <div className={styles.view__headRight}>
          <div className={styles.view__unitDropdown} >
            <button className={styles.view__unitDropdownButton} ref={unitRef} onClick={() => (setUnitDropdown(true))}>
              <span className={styles.view__unitDropdownText}>{colorUnit}</span>
              <svg className={styles.view__iconArrow}>
                <use href='/icons/symbol-defs.svg#icon-chevron-small-down'></use>
              </svg>
            </button>

            {unitDropdown && (
              <div className={styles.view__options}>
                <ul className={styles.view__list}>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("hex"))}>HEX</button>
                  </li>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("rgba"))}>
                        RGBA
                    </button>
                  </li>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("rgb"))}>
                        RGB
                    </button>
                  </li>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("hsla"))}>
                        HSLA
                    </button>
                  </li>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("cmyk"))}>
                        CMYK
                    </button>
                  </li>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("lab"))}>
                        LAB
                    </button>
                  </li>
                  <li className={styles.view__item}>
                    <button className={styles.view__link} onClick={() => (setColorUnit("num"))}>
                        NUM
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.view__likes}>
            <button className={styles.view__button1}>
              <svg className={styles.view__iconHeart}>
                <use href='/icons/symbol-defs.svg#icon-favorite_outline'></use>
              </svg>
              <span className={styles.view__text}>40.8k</span>
            </button>
            <div ref={ref}>
              <button className={styles.view__button2} onClick={() => (setDropDown(true))}>
                <svg className={styles.view__iconArrow}>
                  <use href='/icons/symbol-defs.svg#icon-chevron-small-down'></use>
                </svg>
              </button>
              {dropDown && (
                <div className={styles.view__options1}>
                  <ul className={styles.view__list1}>
                    <li className={styles.view__item1}>
                      <Link href='/' className={styles.view__link1}>
                        <svg className={styles.view__options1Icon1}>
                          <use href='/icons/symbol-defs.svg#icon-launch'></use>
                        </svg>
                        <span className={styles.view__optionsText1}>Open in a generator</span>
                      </Link>
                    </li>
                    <div className={styles.view__divider}></div>
                    <li className={styles.view__item1}>
                      <Link href='/' className={styles.view__link1}>
                        <svg className={styles.view__options1Icon1}>
                          <use href='/icons/symbol-defs.svg#icon-link'></use>
                        </svg>
                        <span className={styles.view__optionsText1}>Copy URL</span>
                      </Link>
                    </li>
                    <li className={styles.view__item1}>
                      <Link href='/' className={styles.view__link1}>
                        <svg className={styles.view__options1Icon1}>
                          <use href='/icons/symbol-defs.svg#icon-remove_red_eye'></use>
                        </svg>
                        <span className={styles.view__optionsText1}>Quick View</span>
                      </Link>
                    </li>
                    <div className={styles.view__divider}></div>
                    <li className={styles.view__item1}>
                      <Link className={styles.view__link1} href='/'>
                        <svg className={styles.view__options1Icon1}>
                          <use href='/icons/symbol-defs.svg#icon-favorite_outline'></use>
                        </svg>
                        <span className={styles.view__optionsText1}>Save Palette</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.view__body}>
        {paletteWithAllUnits?.colors && paletteWithAllUnits.colors.map((color, index) => (
          <ColorBoxDetailed key={color.color_id} length={paletteWithAllUnits.colors.length} color={color} hex={color.hex} colorUnit={colorUnit} index={index} />
        ))}
      </section>

      <section className={styles.view__bottom}>
        <h2 className={styles.view__headingSecondary}>Similar Palettes</h2>
        <div className={styles.view__allPalettes}>
          {randomPalettes && randomPalettes.map((palette: any) => (
            <Palette key={palette.palette_id} {...palette} />
          ))}
        </div>
        <div className={styles.view__morePalettes}>
          <Link href='/palettes' className={styles.view__outlineBtn} >
            Explore More Similar Palettes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ViewPalette;