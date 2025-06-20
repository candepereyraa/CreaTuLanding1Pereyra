import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenida a la tienda virtual de Fenty Beauty!" />
    </>
  )
}

export default App
