import Head from 'next/head';

import { Header } from '../Components/Header';
import { Main } from '../Components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fontawesome.io/assets/font-awesome/css/font-awesome.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Main />
    </>
  )
}
