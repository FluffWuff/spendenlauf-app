import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function PreRunPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-tailwindcss)</title>
      </Head>
        PRERUN
        <Link href="/home">
          <a className="btn-blue">Go to home page</a>
        </Link>
    </React.Fragment>
  )
}
