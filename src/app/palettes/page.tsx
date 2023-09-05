import Navbar from '@/components/Navbar/Navbar';
import Search from '@/components/Search/Search';
import React from 'react';
import styles from './palettes.module.scss';
import Palette from '@/components/Palette/Palette';
import seedPalettes from '@/utils/seedPalettes';
import { Toaster } from 'react-hot-toast';

const page = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <main className={styles.palettes}>
        <div className={styles.palettes__title}>
          <h2 className={styles.palettes__headingPrimary}>Trending Color Palettes</h2>
          <p className={styles.palettes__description}>
              Get inspired by thousands of beautiful color schemes and make something cool!
          </p>
        </div>
        <div className={styles.palettes__list}>
          <Palette {...seedPalettes[4]} />
          <Palette {...seedPalettes[0]} />
          <Palette {...seedPalettes[1]} />
          <Palette {...seedPalettes[2]} />
          <Palette {...seedPalettes[3]} />
          <Palette {...seedPalettes[6]} />
          <Palette {...seedPalettes[5]} />
          <Palette {...seedPalettes[7]} />
          <Palette {...seedPalettes[8]} />
          <Palette {...seedPalettes[9]} />
          <Palette {...seedPalettes[10]} />
          <Palette {...seedPalettes[11]} />
        </div>
      </main>
      <Toaster
        position='bottom-center'
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'white',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  );
};

export default page;