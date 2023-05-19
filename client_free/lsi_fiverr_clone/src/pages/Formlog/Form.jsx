import React, { useState } from 'react';
// import Mutationslog, { CRETE_USER_MUTATION } from '../GraphQl/Mutationslog'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

//import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useMutation } from '@apollo/client';
import { gql } from "@apollo/client";

function Form() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    const [Mutation,{error}]=useMutation(

        gql`
    mutation Mutation(
    $username: String!
    $email: String!
    $password: String!
    $country: String!
    $phone: String!
    $description: String!
) {
    createUser(
        username: $username
        email: $email
        password: $password
        country: $country
        phone: $phone
        description: $description
    ) {
    username
    }
}
`
    );

    const addUser =()=>{
        Mutation({
            variables: {
                username:username,
                email:email,
                password:password,
                country:country,
                phone:phone,
                description:description
            },
        });
        if(error){
            console.log(error)
        }
    }

return (
    <div className="formContainer" style={{position:'absolute',left:'450px', display: 'flex', justifyContent: 'center', alignItems: 'center' ,width:'700px', top:"400px"}}>
            <Avatar sx={{ m: 1, bgcolor: 'green', }} style={{position:'absolute',left:'330px', display: 'flex', justifyContent: 'center', alignItems: 'center' , top:"-150px",backgroundColor:"green"}}>
            <LockOutlinedIcon />
            </Avatar>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
        </Grid>
            <Grid container spacing={6} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input
                        startDecorator={<KeyRoundedIcon />}
                        placeholder="Password"
                        type="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        endDecorator={
                        <IconButton color="neutral">
                        <VisibilityRoundedIcon />
                        </IconButton>
                        }
                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize
                        id="description"
                        aria-label="Description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        minRows={3}
                        style={{ width: '100%', height: '200px' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2} style={{backgroundColor:"#1dbf73", height:"50px"}}>
                        <IconButton color="primary" aria-label="upload picture" component="label" style={{position:"absolute",left:"330px"}}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>
                </Grid>
                <Grid item xs={5}>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button onClick={addUser} variant="contained" endIcon={<SendIcon  />} >
                        Send
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    </div>
);
}

export default Form;
