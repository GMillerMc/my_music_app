import React, { useState } from 'react';


export const DisplayTracks = () => {
const [tracks, setTracks] = useState([
    { name: 'About You', img: "https://geo-media.beatport.com/image_size/500x500/b116dcf4-346c-4b51-8c47-66696e4662c1.jpg",},
    { name: 'Nah (feat. Sinead Harnett)', img: "https://geo-media.beatport.com/image_size/1400x1400/38042bd8-d3fb-421b-ae3b-6eb4d8c6c5e4.jpg" },
    { name: 'What You\'ve Done To Me (feat. Bemendé', img: "https://geo-media.beatport.com/image_size/1400x1400/9b06888d-f139-42eb-82f0-25635e3efbb9.jpg" },
    { name: 'Water (feat. Zohara) Jewels Extended Remix' , img: "https://geo-media.beatport.com/image_size/1400x1400/1248eb79-dc65-46ed-ae66-80d23933eced.jpg" },
    { name: 'Roads (feat. Dan Caplen)', img: "https://geo-media.beatport.com/image_size/1400x1400/13521b70-9b88-4bf7-819b-52e5ddb775c5.jpg"},
])

const renderRows = () => {
    return setTracks, tracks.map(t => <tr><td>{t.name}</td><td><img src={t.img} /></td></tr>)
}

    return (
    <table style={{ border: "1px solid black", width: "90vw", textAlign: "left" }}>
        <thead>
            <tr>
            <th>Track Name</th>
            <th>Image</th>
            </tr>
        </thead>
    
        <tbody>
        { renderRows() }]
        </tbody>
    </table>
);
};


