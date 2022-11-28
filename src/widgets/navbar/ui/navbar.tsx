import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonThemes } from 'shared/ui/app-button/app-button';
import { LoginPopup } from 'features/auth-by-username';
import cls from './navbar.module.scss';

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const { className } = props;

    const { t } = useTranslation();

    const [authIsOpened, setAuthIsOpened] = useState(false);

    const closePopup = useCallback(() => {
        setAuthIsOpened(false);
    }, []);

    const showPopup = useCallback(() => {
        setAuthIsOpened(true);
    }, []);

    return (
        <div className={buildNames([cls.navbar, className])}>
            <AppButton
                className={cls.nav_links}
                onClick={showPopup}
                theme={AppButtonThemes.Clear}
            >
                {t('Войти')}
            </AppButton>
            <LoginPopup isOpened={authIsOpened} onClose={closePopup} />
        </div>
    );
}
