import {ThemeContext} from "../lib/theme-context";
import {FC, useMemo, useState} from "react";
import {AppTheme, DEFAULT_APP_THEME, LOCAL_STORAGE_THEME_KEY} from "../../../../settings";

type ThemeProviderProps = {
    children: JSX.Element;
};

export function ThemeProvider(props : ThemeProviderProps): JSX.Element {
    const {children} = props;
    const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme || DEFAULT_APP_THEME;
    const [theme, setTheme] = useState<AppTheme>(currentTheme);
    const value = useMemo(() => ({theme, setTheme}), [theme]);
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
