"use client";

import React, { useEffect, useRef, useState } from 'react';
import './BTimer.css';


function BTimer(){
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
        // overlayRef is for the dark overlay
        overlayRef.current.classList.add('overlay-active');
        // containerRef is for the timer input and button
        containerRef.current.classList.add('container-hidden');
        // displayRef is for the timer display
        displayRef.current.classList.add('timer-display-active')
        
    };

    const deactivateCountdownMode = () => {
        overlayRef.current.classList.remove('overlay-active');
        containerRef.current.classList.remove('container-hidden');
        displayRef.current.classList.remove('timer-display-active');
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
            <div className="overlay-b" ref={overlayRef}></div>
            <div className="timerContainer-b" ref={containerRef}>
                <label className='label-b' htmlFor="timerInput">Set Timer </label>
                <input type="text" ref={inputRef} placeholder="EX: 01:30:00" className='input-b'/>
                <button className="btn-b" onClick={handleClick}>Enter</button>
            </div>
            <div id="timer" ref={displayRef}></div>
        </>
    )
}
export default BTimer; 