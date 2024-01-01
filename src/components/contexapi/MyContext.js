import React, { useContext } from 'react';
 import { NewContext } from './NewContext';
import { TextField } from '@mui/material';


function MyContext() {
    const{text, setText}=useContext(NewContext);
    console.log("cardData", text);

    
   
  return (
    <div>
        <button type='button' onClick={() =>{
            setText("Abc")
        }}
        > 
        Show setText
        </button>
        <div className="">
          <div>
        <TextField
                 
                size="small"
                name="First Name"
                label="First Name"
                 
              />
              </div>
        </div>
    </div>
  )
}

export default MyContext