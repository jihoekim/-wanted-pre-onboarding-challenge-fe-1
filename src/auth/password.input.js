import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function PasswordInput(props) {

    const [pass, setPassword] = useState('');

    function validate(pass) {
        return pass.length >= 8;
    };

    function handleChange(event) {
        setPassword(event.target.value);
        if (validate(event.target.value)) {
            props?.value(event.target.value);
        } else {
            props?.value(null);
        }
    }

    return (
        <TextField
            required
            fullWidth
            margin="normal"
            autoComplete="current-password"
            label="패스워드"
            placeholder="패스워드를 입력하세요."
            value={pass}
            onChange={handleChange}
        />
    );
};

export default PasswordInput;