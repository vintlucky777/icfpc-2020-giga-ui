import React from 'react'
import Head from 'next/head'
import Battlefield from 'src/Battlefield'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>GIGA - Galaxy Invasion Graphical Analyzer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <Battlefield />
      </div>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
