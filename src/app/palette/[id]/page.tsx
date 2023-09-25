import Navbar from '@/components/Navbar/Navbar';
import paletteService from '@/services/palettes.service';
import { redirect } from 'next/navigation';
import React from 'react';
import ViewPalette from './ViewPalette';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer/Footer';
import ErrorDisplay from '@/components/ErrorDisplay/ErrorDisplay';

const Page = async ({ params }: { params: { id: string } }) => {
  const {data, error, status} = await paletteService.getPaletteById(params.id);
  const randomPalettes = await paletteService.getRandomPalettes();

  if (status >= 400 && status < 500) {
    redirect('/404');
  }

  return (
    <div>
      <Navbar />
      {error && <div style={{height: "100vh", display: "flex", justifyContent: 'center', alignItems: "center"}}><ErrorDisplay message={error.message} /></div>}
      {data && (
        <ViewPalette palette={data} randomPalettes={randomPalettes.data} />
      )}
      <Footer />
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

export default Page;