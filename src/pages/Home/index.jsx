import React from 'react';
import './style.css';
import { UserForm } from '../../components';
import { MainImage } from '../../components';


export const Home = () => {
    return(
        <>
        <div>
        <h1>Welcome To House Fans!</h1>
        <UserForm />
        <MainImage />
        </div>
        </>
    )
}
