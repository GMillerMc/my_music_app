import React, { useState } from 'react';

export const RecommendCounter = () => {
    const [recommendCount, setRecommendCount] = useState(0)

    const increasedRecommendsCount = () => {
        setRecommendCount(prevCount => prevCount + 1)
    }

    return (
        <>
        <p>There have been <span role="figure">{readsCount}</span>  people who like this Artist</p>
        <button aria-label="Read Story" onClick={increasedRecommendsCount}>Like the Artist?</button>
        </>
    )


}

