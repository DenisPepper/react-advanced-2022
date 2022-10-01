import { useContext } from 'react';
import { AppTheme, LOCAL_STORAGE_THEME_KEY } from 'shared/settings';
import { ThemeContext } from './theme-context';

type useThemeResult = {
    theme: AppTheme
    toggleTheme: () => void;
};

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === AppTheme.Light ? AppTheme.Dark : AppTheme.Light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
