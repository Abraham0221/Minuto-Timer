import './Themes.css';
import { useNavigate } from 'react-router-dom';

function ThemePage(){

const navigate = useNavigate();

const switchBPage = () => {
    navigate('/blue');
};

const switchGPage = () => {
    navigate('/pink')
}
return (
    <body>
        <div id="centerContainer">
        <span>
            Choose
        </span>
        <div id="firstButtons">
            <button onClick={switchBPage}></button>
            <button onClick={switchGPage}></button>
        </div>
        </div>
    </body>
    )
}

export default ThemePage;