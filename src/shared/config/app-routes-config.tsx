import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found-page';

export const enum AppPathsNames {
    MAIN ='main',
    ABOUT = 'about',
    PAGE_404 = 'page-404'
}

export const AppRoutes: Record<AppPathsNames, string> = {
    [AppPathsNames.MAIN]: '/',
    [AppPathsNames.ABOUT]: '/about',
    [AppPathsNames.PAGE_404]: '*',
};

export const AppRoutesConfig: Record<AppPathsNames, RouteProps> = {
    [AppPathsNames.MAIN]: { path: AppRoutes.main, element: <MainPage /> },
    [AppPathsNames.ABOUT]: { path: AppRoutes.about, element: <AboutPage /> },
    [AppPathsNames.PAGE_404]: { path: AppRoutes['page-404'], element: <NotFoundPage /> },
};
