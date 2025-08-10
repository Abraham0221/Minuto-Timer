'use client';

import '../layouts/PinkPage.css';
import PTimer from './Timer/PTimer';



function PinkPage(){

    return(
        <div className='pink-page'>
            <div className="video-container">
                <video autoPlay muted loop playsInline>
                    <source className="vid" src='/girlvid.mp4' type="video/mp4" />
                </video>
            </div>
            <PTimer />
        </div>
    )
}

export default PinkPage; 