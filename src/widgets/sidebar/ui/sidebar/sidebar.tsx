import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { useState } from 'react';
import { ThemesSwitcher } from 'shared/ui/themes-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonSizes, AppButtonThemes } from 'shared/ui/app-button/app-button';
import { AppLink, AppLinkThemes } from 'shared/ui/app-link/app-link';
import { AppRoutes } from 'shared/config/app-routes-config';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './sidebar.module.scss';

export function Sidebar():JSX.Element {
    const [cuddled, setCuddled] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCuddled((prev) => !prev);
    };

    return (
        <div className={buildNames([cls.sidebar], { [cls.cuddled]: cuddled })}>
            <AppButton
                className={buildNames([cls.cuddle_btn])}
                type="button"
                onClick={onToggle}
                theme={AppButtonThemes.Background}
                square
                size={AppButtonSizes.L}
            >
                { cuddled ? '>' : '<' }
            </AppButton>
            <div className={buildNames([cls.links])}>
                <AppLink
                    to={AppRoutes.main}
                    className={cls.link}
                    theme={AppLinkThemes.Secondary}
                >
                    <MainPageIcon className={cls.icon} />
                    <span className={cls.link_name}>
                        { t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={AppRoutes.about}
                    className={cls.link}
                    theme={AppLinkThemes.Secondary}
                >
                    <AboutPageIcon className={cls.icon} />
                    <span className={cls.link_name}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={buildNames([cls.switchers])}>
                <ThemesSwitcher />
                <LangSwitcher className={cls.lang} shortView={cuddled} />
            </div>
        </div>
    );
}
