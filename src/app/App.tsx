import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {cl} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={cl('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <ThemeSwitcher/>
        </div>
    );
};

export default App;