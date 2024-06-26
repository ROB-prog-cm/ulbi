import { cl } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cl(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
