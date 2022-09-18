import '../../index.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {AppPath} from "../../settings";
import Page404 from "../../pages/404-page/404-page";
import {MainPageAsync} from "../../pages/main-page/main-page-async";
import {AboutPageAsync} from "../../pages/about-page/about-page-async";
import {Suspense} from "react";


export const App = (): JSX.Element => {

    return(
        <BrowserRouter>
            <div className='app'>
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
        </BrowserRouter>
    );
};