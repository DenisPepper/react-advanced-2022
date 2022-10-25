import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { ReactNode } from 'react';
import cls from './app-link.module.scss';

interface AppPopupProps {
    className?: string;
    children: ReactNode;
}

export function AppPopup(props: AppPopupProps): JSX.Element {
    const { className, children } = props;

    return (
        <div className={buildNames([cls.app_popup, className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    { children }
                </div>
            </div>
        </div>
    );
}
