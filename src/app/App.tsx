import React, {Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {cl} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss'
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={cl('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;