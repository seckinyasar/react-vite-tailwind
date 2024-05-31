import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* Screen Container */}
    <div className='min-w-screen h-screen flex  justify-center p-60 '>
      <div className='text-8xl flex'>Hello </div>

    </div>


    </>
  )
}

export default App
