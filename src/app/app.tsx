import './styles/index.scss';
import { useTheme } from 'app/providers/theme-provider';
import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user';

export default function App(): JSX.Element {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.setAuthDataFromLocalStorage());
    }, [dispatch]);

    return (
        <div className={buildNames(['app', theme], {})}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
