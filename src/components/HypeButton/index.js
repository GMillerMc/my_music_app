import React, { useState } from 'react';

export const HypeButton = () => {
    const [ faved, setFaved ] = useState(false);

    const handleFave = e => {
        e.stopPropagation()
        setFaved(!faved)
    }

    return (
        <button role="switch" onClick={handleFave}
        style={{ backgroundColor: faved ? 'gold' : 'grey' }}>Hype!</button>
    )
}


