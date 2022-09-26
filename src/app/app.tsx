import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/theme-provider";
import {getClassNames} from "shared/lib/get-class-names";
import {AppRouter} from "app/providers/router";
import {AppRoutes} from "shared/config/app-routes-config";



export default function App(): JSX.Element {
    const {theme, toggleTheme} = useTheme();
    return(
        <div className={getClassNames(['app', theme], {})}>
            <button onClick = {toggleTheme}>switch theme</button>
            <Link to={AppRoutes.main}> MAIN PAGE </Link>
            <Link to={AppRoutes.about}> ABOUT PAGE </Link>
            <AppRouter />
        </div>
    );
};