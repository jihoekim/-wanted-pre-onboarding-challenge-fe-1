// @ts-check
/// <reference path="./typedefs.js" />

import React, {useState} from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link as RouterLink
} from 'react-router-dom';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    createTheme,
    Link,
    ThemeProvider,
    Container
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import "./app.css";
import Login from "./auth/login";
import Signup from "./auth/signup";
import validateLogin, { logOut } from "./auth/validate.login";
import Todo from "./todo/todo";

const theme = createTheme();

function App() {

    const [loginState, setLoginState] = useState(validateLogin());

    function handleLogOut() {
        logOut();
        setLoginState(false);
    }

    function handleLogin() {
        setLoginState(true);
    }

    return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todo
                        </Typography>
                        {
                            !loginState ? 
                            <div>
                                <Button color="inherit">
                                    <Link component={RouterLink} to="/auth/login" color="inherit">로그인</Link>
                                </Button>
                                <Button color="inherit"><Link component={RouterLink} to="/auth/signup" color="inherit">회원가입</Link></Button>
                            </div>
                            : <Button color="inherit" onClick={handleLogOut}>로그아웃</Button>
                        }
                        
                    </Toolbar>
                </AppBar>
                <Container maxWidth="xl">
                    <Routes>
                        <Route path='/' element={<Todo loginState={loginState} />}></Route>
                        <Route path='/auth/login' element={<Login  onSuccess={handleLogin} />}></Route>
                        <Route path='/auth/signup' element={<Signup />}></Route>
                        <Route path='/todo' element={<Todo loginState={loginState} />}></Route>
                        <Route path='/todo/:id' element={<Todo loginState={loginState} />}></Route>
                    </Routes>
                </Container>
            </Router>
        </Box>


    </ThemeProvider>

    );
}

export default App;