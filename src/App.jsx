import React from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'

const App = () => {
  return (
    <main className='bg-gray-900 text-white flex flex-col min-h-screen bg-gradient-to-b from-slate-800 to-slate-950 text-sm  sm:text-base'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
