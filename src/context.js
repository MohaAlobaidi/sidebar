import React, { useState, useContext } from 'react'


const AppContext = React.createContext();




let AppProvider = ({children})=>{

    const [showModal,setShowModal]=useState(false)
    const [showSlider,setShowSlider]=useState(false)

    /// open and close function for modal
let openModal =()=>{
  setShowModal(true)
}
let closeModal =()=>{
 setShowModal(false)
}
////////////////////

//////////open and close function for slider
let openSlider=()=>{
  setShowSlider(true)
}

let closeSlider =()=>{
  setShowSlider(false)
}
///////////////




  return <AppContext.Provider 
  value ={{
  showModal ,
 openModal ,
  closeModal,
  showSlider,
  openSlider,
  closeSlider}}>

        {children}

  </AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext,AppProvider} 