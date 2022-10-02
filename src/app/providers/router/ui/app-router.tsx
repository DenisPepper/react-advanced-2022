import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesConfig } from 'shared/config/app-routes-config';
import { PageSpinner } from 'widgets/page-spinner';

export function AppRouter():JSX.Element {
    return (
        <Suspense fallback={<PageSpinner />}>
            <Routes>
                {Object.values(AppRoutesConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(

                            <div className="page-wrapper">
                                {' '}
                                {element}
                                {' '}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
