import { BrowserRouter as Router } from 'react-router-dom'
import RouterDemo from './components/RouterDemo'
import CustomHookDemo from './components/CustomHookDemo'
import RouterDemoBootstrap from './components/RouterDemoBootstrap'
import RouterDemoMUI from './components/RouterDemoMUI'

function App() {
  return (
    <>
      {/* <CustomHookDemo /> */}
      <Router>
        <RouterDemoMUI />
      </Router>
    </>
  )
}

export default App
