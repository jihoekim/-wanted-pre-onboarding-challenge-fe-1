import { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom'

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
import { logOut } from "../auth/validate.login";
import EmailInput from "./email.input";
import PasswordInput from "./password.input";

const theme = createTheme();

function Signup(props) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submitState, setSubmitState] = useState(false);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        setSubmitState(email && password);
        setMessage('');
    }, [email, password])

    const navigate = useNavigate();

    async function createUser() {
        try {
            const response = await authService.createUser(email, password);
            logOut();
            navigate("/auth/login");
        } catch (error) {
            if (error.response?.data?.details) {
                setMessage(error.response.data.details)
            } else {
                console.error(error);
            }
        }
    }

    return (
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
                    회원 가입
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
                        onClick={createUser}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        회원 가입
                    </Button>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Signup;