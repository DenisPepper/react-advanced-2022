import cls from './themes-switcher.module.scss';
import {buildNames} from "shared/lib/build-css-class-names";
import {useTheme} from "app/providers/theme-provider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import {AppTheme} from "shared/settings";
import {AppButton, AppButtonThemes} from "shared/ui/app-button/app-button";


type ThemesSwitcherProps = {
    className?: string;
}

export function ThemesSwitcher(props: ThemesSwitcherProps): JSX.Element {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();
    return (
        <AppButton
            onClick = {toggleTheme}
            className={buildNames([className])}
            theme={AppButtonThemes.Clear}
        >
            {theme === AppTheme.Dark ? <DarkIcon /> : <LightIcon />}
        </AppButton>
    );
}
