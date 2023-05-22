import { Box } from '@mui/material'
import React, { useState } from 'react'

function Search() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const changeHandler = (e) => {
        setName(e.target.value);
        setEmail(e.target.value);
        setAge(e.target.value)
    }
    // console.log(name, "name");
    // console.log(email, "email");
    console.log("rendered");
  return (
    <Box marginTop={8}>
     <input onChange={changeHandler} placeholder='enter name'/>
     <input onChange={changeHandler} placeholder='enter email'/>
     <input onChange={changeHandler} placeholder='age' />
    </Box>
  )
}

export default Search