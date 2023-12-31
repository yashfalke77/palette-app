import Navbar from '@/components/Navbar/Navbar';
import Search from '@/components/Search/Search';
import React from 'react';
import styles from './palettes.module.scss';
import fetchPalettes from '@/actions/fetchPalettes';
import PaletteList from '@/components/PalettesList/PaletteList';
import ErrorDisplay from '@/components/ErrorDisplay/ErrorDisplay';


export const revalidate = 60;


const page = async () => {

  const {data, error, count} = await fetchPalettes(0, 40);

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
        {error ? <ErrorDisplay message={error.message} /> :
          <div>
            <PaletteList initialPalettes={data!} totalResults={count!} />
          </div>
        }
      </main>
    </div>
  );
};

export default page;