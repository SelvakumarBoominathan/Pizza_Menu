import { useState } from 'react'
import Header from './components/Header.jsx';
import Menu from './components/Header.jsx';
import Footer from './components/Header.jsx';
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
