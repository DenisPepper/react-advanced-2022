import {Suspense} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {AppPath} from "settings";
import {useTheme} from "app/providers/theme-provider";
import {getClassNames} from "shared/lib/get-class-names";
import { MainPage } from "pages/main-page";
import { AboutPage } from 'pages/about-page';
import { Page404 } from "pages/404-page";

export default function App(): JSX.Element {
    const {theme, toggleTheme} = useTheme();
    return(
        <div className={getClassNames(['app', theme], {})}>
            <button onClick = {toggleTheme}>switch theme</button>
            <Link to={AppPath.MainPage}> MAIN PAGE </Link>
            <Link to={AppPath.AboutPage}> ABOUT PAGE </Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path={AppPath.MainPage}>
                        <Route index element = {<MainPage />} />
                        <Route path = {AppPath.AboutPage} element = {<AboutPage />} />
                        <Route path = {AppPath.Page404} element={<Page404 />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};