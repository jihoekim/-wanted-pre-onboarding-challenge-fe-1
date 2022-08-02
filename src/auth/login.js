// @ts-check
/// <reference path="../typedefs.js" />


import React, { useEffect, useState } from 'react';
import  { useNavigate, Navigate } from 'react-router-dom'
import {
    Avatar,
    Button,
    CssBaseline,
    Box,
    Typography,
    Container,
    createTheme,
    ThemeProvider,
    TextField
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import * as authService from "../service/auth.service"
import EmailInput from "./email_input";
import PasswordInput from "./password_input";
import validateLogin from './validate.login';

    const theme = createTheme();

function Login(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submitState, setSubmitState] = useState(false);
    const [message, setMessage] = useState('');
    
    let navigate = useNavigate();
    let loginState = validateLogin();

    useEffect(() => {
        // @ts-ignore
        setSubmitState(email && password);
        setMessage('');
    }, [email, password])

    async function login() {
        try {
            // @ts-ignore
            await authService.default(email, password);
            props.onSuccess();
            navigate("/");
        } catch (error) {
            if (error.response?.data?.details) {
                setMessage(error.response.data.details)
            } else {
                console.error(error);
            }
        }
    }

    return loginState ?
    // 이미 로그인 된 상태이면 홈으로 
    <Navigate to='/'  /> :
    ( 
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <EmailInput value={setEmail}/>
                    <PasswordInput value={setPassword} />
                    {
                        message ?  
                        <TextField 
                            fullWidth 
                            value={message}
                            variant="filled"
                            disabled
                            hiddenLabel
                            size="small"
                            error
                            />
                        :<span></span>
                    }
                    <Button
                        disabled={!submitState} 
                        fullWidth
                        variant="contained"
                        onClick={login}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        로그인
                    </Button>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Login;
