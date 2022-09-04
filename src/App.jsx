import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Body />
      <Footer />
    </div>
  )
}

export default App
