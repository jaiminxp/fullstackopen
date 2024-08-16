import { BrowserRouter as Router } from 'react-router-dom'
import RouterDemo from './components/RouterDemo'
import CustomHookDemo from './components/CustomHookDemo'
import RouterDemoBootstrap from './components/RouterDemoBootstrap'
import RouterDemoMUI from './components/RouterDemoMUI'
import RouterDemoStyled from './components/RouterDemoStyled'

function App() {
  return (
    <>
      {/* <CustomHookDemo /> */}
      <Router>
        <RouterDemoStyled />
      </Router>
    </>
  )
}

export default App
