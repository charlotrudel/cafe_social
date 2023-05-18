import React from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        // FIXME
        authService.login('test1', '123').then(() => navigate(-2));
    }
    return <button onClick={handleLogin}>LOGIN</button>;
}
