import { useState } from 'react';

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
        <span>
            <label>패스워드</label>
            <input type="password" value={pass} onChange={handleChange} placeholder="8자 이상의 패스워드를 입력하세요."/>
        </span>
    );
};

export default PasswordInput;