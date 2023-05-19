import React from 'react';
import authService from '../services/authService';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location.state === null ? '/' : location.state.from;

    function handleLogin() {
        authService.login('test1', '123').then(() => navigate(redirectTo));
    }
    return <button onClick={handleLogin}>LOGIN</button>;
}
