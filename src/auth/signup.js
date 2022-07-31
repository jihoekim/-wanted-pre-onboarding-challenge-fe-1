import { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom'

import axios from 'axios';

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

    let navigate = useNavigate();
    async function createUser() {
        
        try {
            const response = await axios.post(
                "http://localhost:8080/users/create", 
                {email:email, password:password}
            );
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