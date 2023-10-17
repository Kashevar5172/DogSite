'use client';

import { Header } from '@/components/header/header';
import { About } from '@/modules/sections/about';
import { DogsSection } from '@/modules/sections/dogs';

import { ImageConteiner } from '@/modules/sections/imageConteiner';
import { Main } from '@/modules/sections/welcome';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <ImageConteiner />
      <About />
      <DogsSection />
    </div>
  );
}
