import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './components/Counter'
import { CounterContextProvider } from './context/CounterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    {/* <CounterContextProvider>
      <Counter />
    </CounterContextProvider> */}
  </Provider>
)
