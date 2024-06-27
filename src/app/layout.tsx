import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import ReduxProvider from '@/shared/store/ReduxProvider';
import SmoothScroll from '@/shared/ui/SmoothScroll/SmoothScroll';
import localFont from 'next/font/local';
import clsx from 'clsx';
import Navbar from '@/widgets/navbar';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Шрифты
const Zhizn = localFont({
  src: [
    {
      path: '../../public/fonts/Zhizn.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--secondary-font',
});

const Manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope-VariableFont_wght.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--base-font',
});

export const metadata: Metadata = {
  title: 'YOZH',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children, ...rest }: RootLayoutProps) {
  return (
    <html lang="ru">
      <head>
        {/*<RemResizeScript*/}
        {/*  defaultFontSize={10}*/}
        {/*  startScaleWidth={1440}*/}
        {/*  endScaleTopWidth={1920}*/}
        {/*  endScaleBottomWidth={1024}*/}
        {/*/>*/}
      </head>
      <body className={clsx(Zhizn.variable, Manrope.variable)}>
        <ReduxProvider {...rest}>
          <SmoothScroll>
            <div className={'relative'} id="app">
              <Navbar />
              {children}
            </div>
          </SmoothScroll>
        </ReduxProvider>
      </body>
    </html>
  );
}
