import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { ButtonHTMLAttributes } from 'react';
import cls from './app-button.module.scss';

export const enum AppButtonThemes {
    Clear = 'clear',
}

type AppButtonProps = {
    className?: string;
    theme?: AppButtonThemes;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function AppButton(props: AppButtonProps): JSX.Element {
    const {
        className, theme, children, ...restProps
    } = props;

    return (
        <button
            type="button"
            className={buildNames([cls[theme], cls.app_button, className])}
            {...restProps}
        >
            {children}
        </button>
    );
}
