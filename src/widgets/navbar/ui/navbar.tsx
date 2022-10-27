import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { useCallback, useState } from 'react';
import { AppPopup } from 'shared/ui/app-popup/app-popup';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonThemes } from 'shared/ui/app-button/app-button';
import cls from './navbar.module.scss';

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const { className } = props;

    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleOnClick = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={buildNames([cls.navbar, className])}>
            <AppButton
                className={cls.nav_links}
                onClick={handleOnClick}
                theme={AppButtonThemes.Clear}
            >
                {t('Войти')}
            </AppButton>
            <AppPopup isOpened={isAuthModal} onClose={handleOnClick}>
                {t('necessitatibus possimus quis saepe sunt totam.')}
            </AppPopup>
        </div>
    );
}
