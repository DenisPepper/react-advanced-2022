import {AppRoutes} from "shared/config/app-routes-config";
import {buildNames} from "shared/lib/build-css-class-names";
import cls from './navbar.module.scss'
import {AppLink, AppLinkThemes} from "shared/ui/app-link/app-link";
import {ThemesSwitcher} from "shared/ui/themes-switcher";

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const {className} = props;

    return (
        <div className={buildNames([cls.navbar, className])}>
            <ThemesSwitcher />
            <div className={buildNames([cls.links])}>
                <AppLink to={AppRoutes.main} className={cls.main_link} theme={AppLinkThemes.Secondary}>Главная</AppLink>
                <AppLink to={AppRoutes.about} theme={AppLinkThemes.Secondary}>О сайте</AppLink>
            </div>
        </div>
    );
}