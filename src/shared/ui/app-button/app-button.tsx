import cls from "./app-button.module.scss";
import {buildNames} from "shared/lib/build-css-class-names";
import {ButtonHTMLAttributes} from "react";

export const enum AppButtonThemes {
    Clear = 'clear',
};

type AppButtonProps = {
    className?: string;
    theme?: AppButtonThemes;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function AppButton(props: AppButtonProps): JSX.Element {
    const {className, theme, children, ...restProps} = props;

    return (
        <button
            className={buildNames([cls[theme], cls.app_button])}
            {...restProps}
        >
            {children}
        </button>
    );
}