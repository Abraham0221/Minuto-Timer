import './BluePage.css';
import Timer from '../../components/Timer/Timer';


function BluePage(){

    return(
        <div className='blue-page'>
            <div className="video-container">
                <video autoplay muted loop>
                    <source className="vid" src='/boybettervid.mp4' type="video/mp4" />
                </video>
            </div>
            <Timer />
        </div>
    )
}

export default BluePage; 