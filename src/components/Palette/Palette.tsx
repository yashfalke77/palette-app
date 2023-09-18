/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./palette.module.scss";
import ColorBox from "../ColorBox/ColorBox";


const Palette = ({ colors }: any) => {

  return (
    <div className={styles.palette}>
      <div className={styles.palette__colors}>
        {colors.map((color) => (
          <ColorBox background={color.hex} key={color.name} name={color.name} />
        ))}
      </div>
      <div className={styles.palette__description}>
        <div className={styles.palette__like}>
          <svg className={styles.palette__iconHeart}>
            <use href='/icons/symbol-defs.svg#icon-heart-outlined'></use>
          </svg>
          <span className={styles.palette__text}>62.7k</span>
        </div>
      </div>
    </div>
  );
};

export default Palette;