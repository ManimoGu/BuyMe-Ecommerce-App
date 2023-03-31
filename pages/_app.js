import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Store from '@/Store'

let persistor = persistStore(Store)

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store} >
      <PersistGate persistor = {persistor} loading={null}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
