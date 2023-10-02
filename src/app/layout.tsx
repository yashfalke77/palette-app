import '../styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Palette',
  description: 'Superfast Color paletter generator and viewer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Toaster
          position='bottom-center'
          reverseOrder={false}
          toastOptions={{
            success: {
              iconTheme: {
                primary: 'white',
                secondary: 'black',
              },
              style: {
                fontSize: '1.6rem'
              }
            },
          }}
        />
      </body>
    </html>
  );
}
