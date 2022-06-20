import React from 'react';
import { useState } from 'react';

export const MainImage = () => {
    const slides = []
    return (
        <div className='container'>
        
            <div className='carousel'>

                <div className='carousel-inner'>
                    {slides.map((slide, index) => (
                        
                    <div className='carousel-item'>
                        <img src={slide} />
                    </div>
                    ))}
                
                </div>
            
            
            </div>
        
        </div>

    )
}
