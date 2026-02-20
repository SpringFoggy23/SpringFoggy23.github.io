import React from 'react';
import './MusicPanel.css';

const MusicPanel = () => {
    const musicList = [
        { title: '🌸 Spring (2025)', src: '/Music/Spring.mp3' },
        { title: '🔴 Red (2022)', src: '/Music/Red.mp3' },
    ];

    return (
        <aside className="music-panel">
            <h2>🎧 Currently Listening</h2>

            {musicList.map((music, index) => (
                <div key={index} className="audio-item">
                    <h3>{music.title}</h3>
                    <audio controls>
                        <source src={music.src} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ))}
        </aside>
    );
};

export default MusicPanel;
