import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

type Props = {
    children: any;
};

export default function PrivateRoute({ children }: Props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState<string>('');

    useEffect(() => {
        authService.getLoginStatus(
            (name: string) => {
                setUser(name);
            },
            () => navigate('/login', { state: { from: location.pathname } }),
        );
    });
    return user === '' ? <></> : children;
}
