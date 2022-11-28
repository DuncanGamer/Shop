import React from 'react'
import Logo from '../molecules/Logo'
import MainMenu from '../molecules/MainMenu'



const MainHeader = () => {
  return (
    <>
    <div className='  fixed z-10 w-full bg-gradient-to-r from-orange-600 to-orange-300'>
    <div className=' container w-full mx-auto flex justify-between items-center'>
    
    <Logo/>
    <MainMenu/>
    </div>
    </div>
    </>
  )
}

export default MainHeader