import React from 'react'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="font-display w-full min-h-screen bg-cyan-gray-light-1 flex flex-col items-center justify-center">
      <h1 className=" font-black text-2xl tracking-widest text-cyan-dark py-8">SPLI<br />TTER</h1>
      <Calculator />
    </div>
  )
}

export default App
