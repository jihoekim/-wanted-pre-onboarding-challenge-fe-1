import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function EmailInput(props) {

    const [email, setEmail] = useState('');

    function validate(email) {
        return email.includes("@") && email.includes(".");
    };

    function handleChange(event) {
        setEmail(event.target.value);
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
            autoComplete="email"
            autoFocus
            label="이메일"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={handleChange}
        />
    );
};

export default EmailInput;