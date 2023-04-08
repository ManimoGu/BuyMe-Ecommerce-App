import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Store from '@/Store'
import Head from 'next/head'

let persistor = persistStore(Store)

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Buyme</title>
        <meta name="description" content="Buyme-ecommerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Provider store={Store} >
      <PersistGate persistor = {persistor} loading={null}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
    
  )
}
