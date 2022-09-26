import {AppRoutes} from "shared/config/app-routes-config";
import {buildNames} from "shared/lib/build-css-class-names";
import cls from './navbar.module.scss'
import {AppLink, AppLinkThemes} from "shared/ui/app-link/app-link";

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const {className} = props;

    return (
        <div className={buildNames([cls.navbar, className])}>
            <div className={buildNames([cls.links])}>
                <AppLink to={AppRoutes.main} className={cls.main_link} theme={AppLinkThemes.Secondary}> MAIN PAGE </AppLink>
                <AppLink to={AppRoutes.about} theme={AppLinkThemes.Special}> ABOUT PAGE </AppLink>
            </div>
        </div>
    );
}