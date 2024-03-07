import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-900">
        Hello world
      </h1>
      <a className='text-blue-600' href="www.google.com">Big bang</a>

    </>
  )
}

export default App
