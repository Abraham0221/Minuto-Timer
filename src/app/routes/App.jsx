import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemePage from "../pages/Themepage/Themes";
import PinkPage from "../pages/Pinktheme/PinkPage";
import BluePage from "../pages/Bluetheme/BluePage";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<ThemePage />} />
                <Route path="/pink" element={<PinkPage />} />
                <Route path="/blue" element={<BluePage />} />
            </Routes>
        </Router>
    )
}

export default App; 