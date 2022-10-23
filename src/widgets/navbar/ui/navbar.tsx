import { AppRoutes } from 'shared/config/app-routes-config';
import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { AppLink, AppLinkThemes } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import { ErrorCheckButton } from 'app/providers/error-provider';
import cls from './navbar.module.scss';

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={buildNames([cls.navbar, className])}>
            <div className={buildNames([cls.links])}>
                <ErrorCheckButton />
                <AppLink
                    to={AppRoutes.main}
                    className={cls.main_link}
                    theme={AppLinkThemes.Secondary}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={AppRoutes.about}
                    theme={AppLinkThemes.Secondary}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
}
