import React from 'react'
import Head from 'next/head'
import Link from 'next/link.js';

export default function HomePage() {
  

  const openFileExplorer = () => {
    window.ipc.send("open-file-explorer", "../");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Spendenlauf-App</title>
      </Head>
      <div className="grid grid-rows-[10vh_38vh_9vh_38vh] grid-flow-col bg-background divide-y-4 divide-secondary-second">
        <div className="row-span-4 bg-primary border-r-4 border-secondary-second"><p>Statusbar</p></div>

        <div className="row-span-1 col-span-7 bg-secondary flex items-center justify-evenly">
          <button className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-secondary-second rounded">
            Neuer Spendenlauf
          </button>
          <button className="bg-primary hover:bg-primary-second text-white 
            font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-secondary-second rounded"
            onClick={openFileExplorer}>
            Dateien
          </button>
        </div>

        <div className="row-span-1 col-span-7 flex items-center justify-center">
          <button className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-secondary-second rounded">
            <Link href='/prerun'>Prerun</Link>
          </button>
        </div>

        <div className="row-span-1 col-span-7 flex items-center justify-center">
          <button className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-secondary-second rounded">
            Lauf starten
          </button>
        </div>
        <div className="row-span-1 col-span-7 bg-primary-second flex items-center justify-center">
          <button type="button" className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 cursor-not-allowed hover:border-blue-500 hover:text-secondary-second rounded" disabled>
            <Link href='/postrun'>Postrun</Link>
          </button>

          
        </div>
      </div>
    </React.Fragment>
  )
}
