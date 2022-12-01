import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonThemes } from 'shared/ui/app-button/app-button';
import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import AppInput from 'shared/ui/app-input/app-input';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import { AppSpinner } from 'shared/ui/app-spinner/app-spinner';
import { AppText, TextTheme } from 'shared/ui/app-text/app-text';
import { getLoginUsername } from '../../model/selectors/get-login-username/get-login-username';
import { getLoginPassword } from '../../model/selectors/get-login-password/get-login-password';
import { getLoginIsLoading } from '../../model/selectors/get-login-is-loading/get-login-is-loading';
import { getLoginError } from '../../model/selectors/get-login-error/get-login-error';
import { LoginByUsername } from '../../model/services/login-by-username/login-by-username';
import cls from './login-form.module.scss';
import { loginActions } from '../../model/slice/login-slice';

export function LoginForm(): JSX.Element {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const handleOnChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleOnChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleOnButtonClick = useCallback(() => {
        dispatch(LoginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={buildNames([cls.login_form])}>
            {error && <AppText textContent={t('неверный логин или пароль')} theme={TextTheme.Error} />}
            {isLoading && <AppSpinner />}
            <AppInput
                classNames={buildNames([cls.login_form__input])}
                type="text"
                placeholder={t('имя пользователя')}
                onChange={handleOnChangeUsername}
                value={username}
            />
            <AppInput
                classNames={buildNames([cls.login_form__input])}
                type="password"
                placeholder={t('пароль')}
                onChange={handleOnChangePassword}
                value={password}
            />
            <AppButton
                className={buildNames([cls.login_form__button])}
                theme={AppButtonThemes.Background}
                onClick={handleOnButtonClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </AppButton>
        </div>
    );
}
