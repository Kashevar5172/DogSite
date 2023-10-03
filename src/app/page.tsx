"use client";

import { Header } from "@/components/header/header";
import { Main } from "@/components/main/main";
import Head from "next/head";

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
      <Header />
      <Main />
    </div>
  );
}
