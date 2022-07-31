import { useState } from 'react';

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
        <span>
            <label>이메일</label>
            <input type="text" placeholder="이메일을 입력하세요." value={email} onChange={handleChange}/>
        </span>
    );
};

export default EmailInput;