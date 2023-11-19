import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function PreRunPage() {
  const generateFile = () => {
    const jsonFile = (document.getElementById('jsonDatei') as HTMLInputElement).files[0]
    if(jsonFile == undefined) return
    window.ipc.send("generating-runners", jsonFile.path)
  }
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-tailwindcss)</title>
      </Head>
      <div className='flex justify-evenly border-b-4 border-secondary py-4'>
        PRERUN
        <button className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-secondary-second rounded">
          <Link href='/home'>Home</Link>
        </button>
      </div>
      <div className='flex flex-col justify-evenly space-y-4 py-4 divide-y-2 divide-primary-second'>
        <div className="importdata flex items-center justify-center space-x-10">
          <label>1. Datei aus mebis importieren:</label>
          <input type="file" name="Datei auswählen" id="jsonDatei" accept='.json' />
        </div>
        <div className="importdata flex items-center justify-center space-x-10 py-4">
          <p>2. Läufer generieren</p>
          <button className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 
            hover:text-secondary-second rounded"
            onClick={generateFile}>
            Generieren
          </button>
          <button className="bg-primary hover:bg-primary-second text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:text-secondary-second rounded">
            Anzeigen
          </button>
        </div>

      </div>
    </React.Fragment>
  )
}
