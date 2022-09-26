import {Link} from "react-router-dom";
import {AppRoutes} from "shared/config/app-routes-config";
import {buildNames} from "shared/lib/build-css-class-names";
import cls from './navbar.module.scss'

type NavbarProps = {
    classNames?: string[];
}

export function Navbar(props: NavbarProps): JSX.Element {
    const {classNames = []} = props;
    return (
        <div className={buildNames([cls.navbar, ...classNames])}>
            <div className={buildNames([cls.links])}>
                <Link to={AppRoutes.main} className={buildNames([cls.mainLink])}> MAIN PAGE </Link>
                <Link to={AppRoutes.about}> ABOUT PAGE </Link>
            </div>
        </div>
    );
}