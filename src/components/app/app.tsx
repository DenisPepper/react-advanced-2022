import '../../index.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {AppPath} from "../../settings";
import MainPage from "../../pages/main-page/main-page";
import AboutPage from "../../pages/about-page/about-page";
import Page404 from "../../pages/404-page/404-page";

export const App = (): JSX.Element => {

    return(
        <BrowserRouter>
            <div className='app'>
               <Link to={AppPath.MainPage}> MAIN PAGE </Link>
               <Link to={AppPath.AboutPage}> ABOUT PAGE </Link>
                <Routes>
                    <Route path={AppPath.MainPage}>
                        <Route index element = {<MainPage />} />
                        <Route path = {AppPath.AboutPage} element = {<AboutPage />} />
                        <Route path = {AppPath.Page404} element={<Page404 />}/>
                    </Route>
                </Routes>
           </div>
        </BrowserRouter>
    );
};