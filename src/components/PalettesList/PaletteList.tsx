'use client';

import { Database } from '@/models/supabase';
import paletteService from '@/services/palettes.service';
import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Palette from '../Palette/Palette';
import styles from './paletteList.module.scss';
import Loading from '../loading/Loading';

interface InfiniteScrollPalettesProps {
    initialPalettes: Database["public"]["Tables"]["palettes"]["Row"][];
    totalResults: number;
}

const PaletteList = ({initialPalettes, totalResults}: InfiniteScrollPalettesProps) => {
  const [palettes, setPalettes] = useState<Database["public"]["Tables"]["palettes"]["Row"][]>(initialPalettes);
  const [offset, setOffset] = useState(40);

  const fetchData = async () => {
    const {data} = await paletteService.getAllPalettes(offset, 40);
    setPalettes((prev) => [...prev, ...(data!)]);
    setOffset(offset + 40);
  };


  return (
    <div>
      <InfiniteScroll
        style={{overflow: 'hidden'}}
        dataLength={palettes.length}
        next={fetchData}
        hasMore={offset < totalResults}
        loader={<div className={styles.loading}><Loading /></div>}
      >
        <div className={styles.palettes__list}>
          {palettes && palettes.map((palette) => (
            <Palette key={palette.palette_id} {...palette} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PaletteList;