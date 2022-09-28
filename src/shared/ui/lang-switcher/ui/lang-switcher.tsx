import cls from './lang-switcher.module.scss';
import {useTranslation} from "react-i18next";
import {AppButton, AppButtonThemes} from "shared/ui/app-button/app-button";
import {buildNames} from "shared/lib/build-css-class-names";

type LangSwitcherProps = {
    className?: string;
}

export function LangSwitcher(props: LangSwitcherProps): JSX.Element {
    const {className} = props;
    const {t, i18n} = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    };

    return(
            <AppButton
                className={buildNames([className])}
                theme={AppButtonThemes.Clear}
                onClick={onToggle}
            >
                {t('Язык')}
            </AppButton>
    );
}