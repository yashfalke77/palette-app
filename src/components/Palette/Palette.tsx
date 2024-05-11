/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./palette.module.scss";
import ColorBox from "../ColorBox/ColorBox";
import Link from "next/link";
import { Color } from "@/models/color.model";


const Palette = ({ colors, palette_id }: {colors: Color[], palette_id: string}) => {

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
            <use href='/icons/symbol-defs.svg#icon-favorite_outline'></use>
          </svg>
          <span className={styles.palette__text}>62.7k</span>
          <Link href={`/palette/${palette_id}`} className={styles.palette__text} style={{marginLeft: '1rem'}}>view</Link>
        </div>
      </div>
    </div>
  );
};

export default Palette;