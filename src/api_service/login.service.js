// @ts-check
/// <reference path="../typedefs.js" />

import axios from "axios";

export default async function login(email, password) {    
        const response = await axios.post(
            "http://localhost:8080/users/login", 
            {email:email, password:password}
        );
        if (response.data?.token) {
            localStorage.setItem("token", response.data.token);
        }

}