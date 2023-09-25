'use client';
import React, { useState } from 'react';
import styles from './colorBoxDetailed.module.scss';
import { Color } from '@/models/color.model';
import toast from 'react-hot-toast';
import chroma from 'chroma-js';
import CopyToClipboard from 'react-copy-to-clipboard';

interface ColorBoxDetailedProps {
    length: number;
    color: Color;
    hex: string;
    colorUnit: string;
    index: number;
}

interface Object1{
  [key: string]: string;
}

const styleConfigUtility = (index: number, hex: string, length: number) => {
  const styleConfigurations: Object1 = {
    backgroundColor: `#${hex}`,
    height: `${length > 5 ? "20rem" : "40rem"}`,
  };

  if (length <= 5){
    if (index === 0) {
      styleConfigurations["borderTopLeftRadius"] = "14px";
      styleConfigurations["borderBottomLeftRadius"] = "14px";
    } else if (index === length - 1) {
      styleConfigurations["borderTopRightRadius"] = "14px";
      styleConfigurations["borderBottomRightRadius"] = "14px";

    }
  } else {
    switch (index) {
    case 0: {
      styleConfigurations["borderTopLeftRadius"] = "14px";
      break;
    }
    case 4: {
      styleConfigurations["borderTopRightRadius"] = "14px";
      styleConfigurations["borderBottomRightRadius"] = "14px";

      break;
    }
    case 5: {
      styleConfigurations["borderBottomLeftRadius"] = "14px";
      break;
    }
    case length - 1: {
      styleConfigurations["borderBottomRightRadius"] = "14px";

      break;
    }
    }
  }
  return styleConfigurations;
};

const ColorBoxDetailed = ({length, color, hex, colorUnit, index}: ColorBoxDetailedProps) => {

  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    toast.success('Color Copied to Clipboard!', {
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
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const isDarkColor = chroma(color.hex).luminance() <= 0.15;
  const styleConfigurations = styleConfigUtility(index, hex, length);


  return (
    <CopyToClipboard text={color[colorUnit]} onCopy={changeCopyState}>
      <div className={styles.colorBox} style={styleConfigurations}>
        <span className={`${styles["colorBox__text"]}  ${styles[`${isDarkColor ? "colorBox__text--light" : "colorBox__text--dark"}`]}  ${styles[`${copied && "colorBox__text--hide"}`]}`}>
                    Click to Copy
        </span>
        <svg className={`${styles["colorBox__icon"]} ${styles[`${isDarkColor ? "colorBox__icon--light" : "colorBox__icon--dark"}`]}  ${styles[`${copied && "colorBox__icon--show"}`]}`}>
          <use href='/icons/symbol-defs.svg#icon-check'></use>
        </svg>
        <span className={`${styles["colorBox__textBottom"]} ${styles[`${isDarkColor ? "colorBox__textBottom--light" : "colorBox__textBottom--dark"}`]}`}>
          {color[colorUnit]}
        </span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBoxDetailed;