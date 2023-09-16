import Navbar from '@/components/Navbar/Navbar';
import Search from '@/components/Search/Search';
import React from 'react';
import styles from './palettes.module.scss';
import Palette from '@/components/Palette/Palette';
// import seedPalettes from '@/utils/seedPalettes';
import { Toaster } from 'react-hot-toast';
import supabaseServer from '@/utils/supabase';
import { Database } from '@/models/supabase';

const getPalettes = async () => {
  return await supabaseServer.from('palettes').select('*, colors(*)')
    .returns<(Database['public']['Tables']['palettes']['Row'] & {
      colors: Database['public']['Tables']['colors']['Row'][]
    })[]>();
};

export const revalidate = 60;


const page = async () => {

  const {data, error} = await getPalettes();

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
        {error && <p>{error.message}</p>}
        <div className={styles.palettes__list}>
          {data && data.map((palette) => (
            <Palette key={palette.palette_id} {...palette} />
          ))}
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