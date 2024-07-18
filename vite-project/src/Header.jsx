import React, { useContext } from 'react'
import LangContext from './Context/UserContext'

export default function Header() {

   const {setLang}= useContext(LangContext);
  return (
    <select onChange={(e)=>{

        setLang(e.target.value);

    }}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
    </select>
  )
}