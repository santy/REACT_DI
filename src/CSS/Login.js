//npm install @mui/material @emotion/react @emotion/styled 
//npm install @mui/icons-material
//https://mui.com/material-ui/
import { Button, TextField, Typography, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import React from 'react'

function Login() {
  return (
    <div style={{backgroundColor:'white', margin:'20px', textAlign:'center', padding:'20px'}}>
        <h1>Login</h1>
        <div className="formfield">
          <TextField variant="outlined"  />
        </div>
        <div className='formfield'>
          <TextField variant="filled" />
        </div>
        <div className='formfield'>
          <Button variant="contained" endIcon={<SendIcon />}>Login</Button>
        </div>
        <Typography variant="body">Login</Typography>
        <Alert variant="standard" color="info">
        This is an alert!
        </Alert>
    </div>
  )
}

export default Login