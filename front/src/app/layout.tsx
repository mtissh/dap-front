import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header, Inner, Main } from './_components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header/>
        <Main>
          <Inner>
            {children}
          </Inner>
        </Main>
        <Footer/>
      </body>
    </html>
  );
}
