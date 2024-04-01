import { cl } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={cl(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
