import {createContext} from "react";
import {AppTheme} from "../../../../settings";

export type ThemeContextProps = {
    theme: AppTheme;
    setTheme: (theme: AppTheme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(null);



