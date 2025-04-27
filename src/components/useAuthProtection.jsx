import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuthProtection() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
        }
    }, [navigate]);
}
