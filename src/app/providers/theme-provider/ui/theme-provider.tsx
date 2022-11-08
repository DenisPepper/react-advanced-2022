import { ReactNode, useMemo, useState } from 'react';
import { AppTheme, DEFAULT_APP_THEME, LOCAL_STORAGE_THEME_KEY } from 'shared/settings';
import { ThemeContext } from '../lib/theme-context';

type ThemeProviderProps = {
    children: ReactNode;
};

const getTheme = (): AppTheme => {
    switch (localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) {
    case AppTheme.Light:
        return AppTheme.Light;
    case AppTheme.Dark:
        return AppTheme.Dark;
    default:
        return DEFAULT_APP_THEME;
    }
};

export function ThemeProvider(props : ThemeProviderProps): JSX.Element {
    const { children } = props;
    const currentTheme = getTheme();
    const [theme, setTheme] = useState<AppTheme>(currentTheme);
    const value = useMemo(() => ({ theme, setTheme }), [theme]);
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
