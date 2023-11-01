'use client';

import { DogsSection } from '@/modules/sections/dogs';

import { Main } from '@/modules/sections/welcome';

import MySlider from '../modules/sections/slider/page';

export default function Home() {
  return (
    <div>
      <Main />
      <MySlider />
      <DogsSection />
    </div>
  );
}
