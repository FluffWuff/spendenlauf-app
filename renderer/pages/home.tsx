import React from 'react'
import Head from 'next/head'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Spendenlauf-App</title>
      </Head>
      <div className="grid grid-rows-[30vh_30vh_30vh] grid-flow-col bg-green">
          <div className="row-span-3 bg-red"><p>Statusbar</p></div>
          <div className="row-span-1 col-span-7 bg-pink">Pre-Run</div>
          <div className="row-span-1 col-span-7 bg-white hover:bg-black">Run</div>
          <div className="row-span-1 col-span-7">Post-Run</div>
        </div>
    </React.Fragment>
  )
}
