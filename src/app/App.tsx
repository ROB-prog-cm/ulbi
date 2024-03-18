import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {cl} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={cl('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <AppRouter/>
        </div>
    );
};

export default App;