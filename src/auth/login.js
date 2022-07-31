import { useEffect, useState } from 'react';
import  { useNavigate, Navigate } from 'react-router-dom'

import axios from 'axios';

import EmailInput from "./email_input";
import PasswordInput from "./password_input";

// 로그인 상태인지 확인
export function checkLogin() {
    return !!localStorage.getItem("token");
}

function Login(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submitState, setSubmitState] = useState(false);
    const [message, setMessage] = useState('');
    
    let navigate = useNavigate();
    let loginState = checkLogin();

    useEffect(() => {
        setSubmitState(email && password);
        setMessage('');
    }, [email, password])

    // 서버로 로그인 요청
    async function login() {
        
        try {
            const response = await axios.post(
                "http://localhost:8080/users/login", 
                {email:email, password:password}
            );
            if (response.data?.token) {
                localStorage.setItem("token", response.data.token);
            }
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
        <div>
            <EmailInput value={setEmail}/>
            <PasswordInput value={setPassword} />
            <input type="button" disabled={!submitState} value="로그인" onClick={login}/>
            <div style={{color:"red"}}>{message}</div>
        </div>
    );
};

export default Login;
