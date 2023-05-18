import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

type Props = {
    children: any;
};

export default function PrivateRoute({ children }: Props) {
    const navigate = useNavigate();
    const [user, setUser] = useState<string>('');

    useEffect(() => {
        authService.getLoginStatus(
            (name: string) => {
                setUser(name);
            },
            () => navigate('/login'),
        );
    });
    return user === '' ? <></> : children;
}
