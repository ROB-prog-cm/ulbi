import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<div>Loading_____</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;