import chroma from 'chroma-js';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './colorBox.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ColorBoxProps {
    background: string,
    name: string
}

const ColorBox = ({background}: ColorBoxProps) => {

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

  const isDarkColor = chroma(background).luminance() <= 0.15;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className={styles.colorBox} style={{ backgroundColor: `#${background}` }}>
        <span className={`${styles["colorBox__text"]} ${styles[`${isDarkColor ? "colorBox__text--light" : "colorBox__text--dark"}`]} ${styles[`${copied && "colorBox__text--hide"}`]}`}>
          {background}
        </span>
        <svg className={`${styles["colorBox__icon"]}  ${styles[`${isDarkColor ? "colorBox__icon--light" : "colorBox__icon--dark"}`]}   ${styles[`${copied && "colorBox__icon--show"}`]}`}>
          <use href='/icons/symbol-defs.svg#icon-check'></use>
        </svg>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;