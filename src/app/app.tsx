import './styles/index.scss';
import {useTheme} from "app/providers/theme-provider";
import {buildNames} from "shared/lib/build-css-class-names";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {Sidebar} from "widgets/sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";



export default function App(): JSX.Element {
    const {theme} = useTheme();
    return(
        <div className={buildNames(['app', theme], {})}>
            <Suspense fallback=''>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};