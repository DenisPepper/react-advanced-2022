import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonThemes } from 'shared/ui/app-button/app-button';
import { LoginPopup } from 'features/auth-by-username';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import cls from './navbar.module.scss';

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [authIsOpened, setAuthIsOpened] = useState(false);
    const userAuthData = useSelector(getUserAuthData);

    const closePopup = useCallback(() => {
        setAuthIsOpened(false);
    }, []);

    const showPopup = useCallback(() => {
        setAuthIsOpened(true);
    }, []);

    const logOut = () => {
        closePopup();
        dispatch(userActions.logOut());
    };

    if (userAuthData) {
        return (
            <div className={buildNames([cls.navbar, className])}>
                <AppButton
                    className={cls.nav_links}
                    onClick={logOut}
                    theme={AppButtonThemes.Clear}
                >
                    {t('Выйти')}
                </AppButton>
            </div>
        );
    }

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
