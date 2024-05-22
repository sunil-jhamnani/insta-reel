import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container border-solid'>
        <h1 className="text-3xl font-light underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
// mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/instagramcom.json