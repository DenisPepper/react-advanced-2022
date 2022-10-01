import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesConfig } from 'shared/config/app-routes-config';

export function AppRouter():JSX.Element {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
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
