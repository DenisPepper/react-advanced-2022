import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/app-button/app-button';
import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { AppInput } from 'shared/ui/app-input/app-input';
import cls from './login-form.module.scss';

export function LoginForm(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className={buildNames([cls.login_form])}>
            <AppInput
                classNames={buildNames([cls.login_form__input])}
                type="text"
                placeholder={t('имя пользователя')}
            />
            <AppInput
                classNames={buildNames([cls.login_form__input])}
                type="password"
                placeholder={t('пароль')}
            />
            <AppButton className={buildNames([cls.login_form__button])}>
                {t('Войти')}
            </AppButton>
        </div>
    );
}
