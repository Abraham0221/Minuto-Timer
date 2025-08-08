import BTimer from './Timer/BTimer';
import '../layouts/BluePage.css';

function BluePage(){

    return(
        <div className='blue-page'>
            <div className="video-container">
                <video autoPlay muted loop>
                    <source className="vid" src='/boybettervid.mp4' type="video/mp4" />
                </video>
            </div>
            <BTimer />
        </div>
    )
}

export default BluePage; 