import React from 'react'
import './VideoCard.css';
function VideoCard() {
    return (
        <div className='videoCard'>
            <h1>VideoCard</h1>
            <img 
                src='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
                alt=''
            />
            <p>This is about Elon</p>
            <h2>Movie title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
