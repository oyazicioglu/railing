import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Railing Application</title>
      </Head>
    </Fragment>
  )
}
