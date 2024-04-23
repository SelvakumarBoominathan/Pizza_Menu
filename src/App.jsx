import { useState } from 'react'
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

export default App
