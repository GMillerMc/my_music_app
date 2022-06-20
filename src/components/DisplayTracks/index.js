import React, { useState } from 'react';
import './style.css'
import { HypeButton } from '../HypeButton';

export const DisplayTracks = () => {
    const [flip, setflip] = useState(false);
    return(
        <>
    
    <div className='image-container'>
        <div className='flip-box'>
            <div className='flip-box-inner'>
            
                <div className='flip-box-front'>
                <img src="https://geo-media.beatport.com/image_size/500x500/b116dcf4-346c-4b51-8c47-66696e4662c1.jpg"/>
                </div>
                
                <div className='flip-box-back'>
                <h4>About You</h4>
                <p>Buy now on <a href='https://www.beatport.com/track/about-you/14469287'>Beatport</a></p>
                <div>
                
                </div>
                </div>
            </div>
        </div>

        <div className='flip-box'>
            <div className='flip-box-inner'>
            
                <div className='flip-box-front'>
                <img src="https://geo-media.beatport.com/image_size/1400x1400/38042bd8-d3fb-421b-ae3b-6eb4d8c6c5e4.jpg"/>
                </div>
                
                <div className='flip-box-back'>
                <h4>Nah (feat. Sinead Harnett)</h4>
                <h4>Buy now on <a href='https://www.beatport.com/track/nah-feat-sinead-harnett/15566850'>Beatport</a></h4>
                </div>
            </div>
        </div>
    

        <div className='flip-box'>
            <div className='flip-box-inner'>
            
                <div className='flip-box-front'>
                <img src="https://geo-media.beatport.com/image_size/500x500/44622d67-18ec-43ee-9dd0-a6f14c3864fd.jpg"/>
                </div>
                
                <div className='flip-box-back'>
                <h4>Water (feat. Zohara)</h4>
                <h4>Buy now on <a href='https://www.beatport.com/track/water-feat-zohara/14427966'>Beatport</a></h4>
                </div>
            </div>
            </div>

        <div className='flip-box'>
            <div className='flip-box-inner'>
            
                <div className='flip-box-front'>
                <img src="https://geo-media.beatport.com/image_size/1400x1400/9b06888d-f139-42eb-82f0-25635e3efbb9.jpg"/>
                </div>
                
                <div className='flip-box-back'>
                <h4>What You've Done To Me (feat. Bemendé</h4>
                <h4>Buy now on <a href='https://www.beatport.com/track/what-youve-done-to-me-feat-bemende/15667046'>Beatport</a></h4>
                </div>
            </div>
        </div>

        <div className='flip-box'>
            <div className='flip-box-inner'>
            
                <div className='flip-box-front'>
                <img src="https://geo-media.beatport.com/image_size/1400x1400/13521b70-9b88-4bf7-819b-52e5ddb775c5.jpg"/>
                </div>
                
                <div className='flip-box-back'>
                <h4>Roads (feat. Dan Caplen)</h4>
                <h4>Buy now on <a href='https://www.beatport.com/track/roads-feat-dan-caplen/15542863'>Beatport</a></h4>
                </div>
            </div>
        </div>
    </div>
        
        
        
        
    
    </>
    )
}


