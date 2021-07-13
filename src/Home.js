import React, {useContext}from 'react'
import {AppContext} from './context'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openModal , openSlider} =useContext(AppContext)

  return <main>
    <button onClick={openSlider} className="sidebar-toggle">
      <FaBars/>
    </button>
    <button onClick={openModal } className='btn'>show modal</button>
  </main>
}

export default Home
