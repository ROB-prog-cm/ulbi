import React from 'react';
import {cl} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={cl(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={'/'}
                >
                    Main
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.RED}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
};



