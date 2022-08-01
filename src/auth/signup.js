import { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom'

import * as authService from "../api_service/auth.service"

import EmailInput from "./email_input";
import PasswordInput from "./password_input";

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
        <div>
            <EmailInput value={setEmail}/>
            <PasswordInput value={setPassword} />
            <input type="button" disabled={!submitState} value="가입" onClick={createUser}/>
            <div style={{color:"red"}}>{message}</div>
        </div>
    );
};

export default Signup;