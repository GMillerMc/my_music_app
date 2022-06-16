import React, { useState } from 'react';

export const ArtistInfo = () => {
    const [ artistName, setArtistInfo ] = useState('KREAM');
    const [ featuredTracks, setFeaturedTracks ] = useState(5)

    return (
    <div>
        <h2>{artistName}</h2>
        <h3>Future House Originators</h3>
        <h3>Bio:</h3><p>KREAM feature the talents of Norwegian brothers Daniel and Markus Slettebakken. KREAM has garnered worldwide attention for their unique blend of bass-driven dance music and melancholic vocals. Initially discovered on SoundCloud through their remixes, their original music has now been played over 300 million times. The duo continues to produce official remixes for major artists such as Dua Lipa, Anne Marie, Tove Lo, Bazzi, Zara Larsson, Kyle & Kehlani and Jess Glynne. 2018/2019 Was characterized by the brothers increased focus on house music with releases like "Decisions" "Enough " "Go Somewhere" and "Ain't Thinkin Bout You" with remixes from Weiss (UK), KC Lights and Zac Samuel.</p>
    <h3>Featured Tracks: {featuredTracks}</h3>
    </div>
    );
}

