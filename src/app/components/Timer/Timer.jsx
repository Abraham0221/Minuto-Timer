"use client";

import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';


function Timer(){
    const inputRef = useRef(null);
    const displayRef = useRef(null);
    const overlayRef = useRef(null);
    const containerRef = useRef(null);
    const [countdown,  setCountdown] = useState(null);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60; 
        return `${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}`
    };
     
    const parseTimeInput = (input) => {
        if (/^\d+$/.test(input.trim())) return parseInt(input.trim());
        const parts = input.trim().split(':').map(Number);
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        return 0;
    };
    
    const activateCountdownMode = () => {
        overlayRef.current.style.cssText = `
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
        `;
        containerRef.current.style.cssText =`
            opacity: 0; 
            transition: opacity 0.5s ease;
            pointer-events: none;
        `;
        displayRef.current.style.cssText = `
            postion: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            font-size: 120px;
            color: white;
            font-family: "Playfair Display", serif;
            font-weight: bold;
            text-align: center;
            z-index: 2;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        `;
    };

    const deactivateCountdownMode = () => {
        overlayRef.current.removeAttribute('style');
        containerRef.current.removeAttribute('style');
        displayRef.current.removeAttribute('style');
        inputRef.current.value = '';
    };

    const startCountdown = (totalSeconds) => {
        if (countdown){
            clearInterval(countdown)
        }
        let secondsLeft = totalSeconds;
        activateCountdownMode();
        displayRef.current.textContent = formatTime(secondsLeft)

        const intervalId = setInterval(() => {
            secondsLeft--;
            displayRef.current.textContent = formatTime(secondsLeft)
            if(secondsLeft <= 0) {
                clearInterval(intervalId);
                displayRef.current.textContent = 'FINISHED';
                setTimeout(() => {
                    displayRef.current.textContent = '';
                    alert('Time is up! Click OK to reset.');
                    deactivateCountdownMode();
                }, 1000);
            }
        }, 1000);
        setCountdown(intervalId);
    }

    const handleClick = () => {
        const input = inputRef.current.value;
        const totalSeconds = parseTimeInput(input);
        if(totalSeconds > 0) {
            startCountdown(totalSeconds);
        }else {
            alert('Enter valid time (HH:MM:SS, MM:SS, or seconds')
        }
    }

    useEffect(() => {
        const onEnter = (enter) => {
            if (enter.key === 'Enter') handleClick();
        }
        const input = inputRef.current;
        input.addEventListener('keypress', onEnter);
    }, []);
    return (
         <>
            <div className="overlay" ref={overlayRef}></div>
            <div className="timerContainer" ref={containerRef}>
                <label htmlFor="timerInput">Set Timer </label>
                <input type="text" ref={inputRef} placeholder="EX: 01:30:00" id="timerInput" />
                <button className="btn" onClick={handleClick}>Enter</button>
            </div>
            <div id="timer" ref={displayRef}></div>
        </>
    )
}
export default Timer; 