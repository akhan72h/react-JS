import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LangContext from './Context/UserContext';
import Header from './Header';
import UserRegistration from './UserRegistraion';

function App() {
  const [Lang,setLang]= useState('English');

  return (
    <>
      <div>


      <LangContext.Provider value={{Lang,setLang}}>  

                 <Header/>
                 <UserRegistration/>
                 {/* <Example/> */}

     </LangContext.Provider>


      </div>
     
    </>
  )
}

export default App
