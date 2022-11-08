export const enum AppTheme {
    Light = 'app_light_theme',
    Dark = 'app_dark_theme'
}

export const DEFAULT_APP_THEME = AppTheme.Light;

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ROOT = document.getElementById('root') as HTMLElement;
