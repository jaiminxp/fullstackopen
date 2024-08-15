import { BrowserRouter as Router } from 'react-router-dom'
import RouterDemo from './components/RouterDemo'
import CustomHookDemo from './components/CustomHookDemo'
import RouterDemoBootstrap from './components/RouterDemoBootstrap'

function App() {
  return (
    <>
      {/* <CustomHookDemo /> */}
      <Router>
        <RouterDemoBootstrap />
      </Router>
    </>
  )
}

export default App
