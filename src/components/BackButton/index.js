import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = 
    useNavigate()

    return (
        <button aria-label='Go back 1 page' onClick={() =>
        navigate(-1)}>
            go back
        </button>
    );
}
