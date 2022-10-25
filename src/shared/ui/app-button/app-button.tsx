import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { ButtonHTMLAttributes } from 'react';
import cls from './app-button.module.scss';

export const enum AppButtonThemes {
    Clear = 'clear',
    Background = 'background',
}

export const enum AppButtonSizes {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type AppButtonProps = {
    className?: string;
    theme?: AppButtonThemes;
    square?: boolean;
    size?: AppButtonSizes;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function AppButton(props: AppButtonProps): JSX.Element {
    const {
        className, theme, square, size, children, ...restProps
    } = props;

    const classNames = buildNames([
        cls[theme],
        cls[size],
        square ? cls.square : '',
        cls.app_button,
        className]);

    return (
        <button type="button" className={classNames} {...restProps}>
            {children}
        </button>
    );
}
