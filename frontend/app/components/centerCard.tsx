"use client"; // Fügt dies hinzu, um die Komponente als Client Component zu kennzeichnen

import React, { useState, useEffect } from 'react';
import '../styles/centerCard.css';

const FollowCard: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isFollowing, setIsFollowing] = useState(false);

    // Event Listener für Mausbewegungen
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isFollowing) {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isFollowing]);

    // Event Listener für Klick
    const handleMouseDown = () => {
        setIsFollowing(true); // Karte folgt dem Mauszeiger nach einem Klick
    };

    const handleMouseUp = () => {
        setIsFollowing(false); // Karte hört auf zu folgen, wenn Maustaste losgelassen wird
    };

    return (
        <div
            className="card"
            style={{
                position: 'absolute',
                left: position.x - 50, // Korrigiert die Position, damit die Karte den Mauszeiger mittig trifft
                top: position.y - 50,
                transform: 'translate(-50%, -50%)', // Sorgt dafür, dass die Karte zentriert zum Mauszeiger ist
                transition: 'left 0.1s, top 0.1s' // Smooth Transition für sanfte Bewegung
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            This is a card
        </div>
    );
};

export default FollowCard;
