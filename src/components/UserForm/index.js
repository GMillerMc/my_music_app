import React, {useState} from 'react';

export const UserForm = () => {
    const [userName, setUserName] = useState('friend');
    const [nameInput, setNameInput] = useState('');

    const handleInput = (e) => {
        setNameInput(e.target.value)
    }

    const handleFormSubmmit = (e) => {
        e.preventDefault();
        setUserName(nameInput)
        setNameInput('')
    }


    return(
        <>
        <h3 aria-label="greeting">Hi There, {userName}!</h3>

        <form role="username" onSubmit={handleFormSubmmit}>
            <label 
            htmlFor="username">
            Username</label>
            
            <input type="text" id="username" placeholder="That's not my name"
            value={nameInput} 
            onChange={handleInput}/>
            <input type="submit" value="Update!" />
        </form>
        </>
    )
}

