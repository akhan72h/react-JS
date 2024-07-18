
import React, { useContext } from 'react'
import LangContext from './Context/UserContext'

export default function UserRegistration() {

    const {Lang}  = useContext(LangContext);

    const info = {
        "English" : {
            "firstName": "firstName",
            "lastName":"lastName"
        },
        "Hindi": {
            "firstName": "प्रथम नाम",
            "lastName": "अंतिम नाम"
        }
        
    }
  return (
    <div>
            <label>{info[Lang].firstName}</label>

             <input type='text' /> <br /><br />

             <label>{info[Lang].lastName}</label>

             <input type='text' />



    </div>
  )
}
