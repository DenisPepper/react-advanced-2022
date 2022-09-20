import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {AppPath} from "../settings";
import Page404 from "../pages/404-page/404-page";
import {MainPageAsync} from "../pages/main-page/main-page-async";
import {AboutPageAsync} from "../pages/about-page/about-page-async";
import {Suspense} from "react";
import {useTheme} from "./providers/theme-provider/lib/use-theme";
import {classNames} from "../utils/class-names";

export default function App(): JSX.Element {
    const {theme, toggleTheme} = useTheme();

    return(
        <div className={classNames(['app', theme], {})}>
            <button onClick = {toggleTheme}>switch theme</button>
            <Link to={AppPath.MainPage}> MAIN PAGE </Link>
            <Link to={AppPath.AboutPage}> ABOUT PAGE </Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path={AppPath.MainPage}>
                        <Route index element = {<MainPageAsync />} />
                        <Route path = {AppPath.AboutPage} element = {<AboutPageAsync />} />
                        <Route path = {AppPath.Page404} element={<Page404 />}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};