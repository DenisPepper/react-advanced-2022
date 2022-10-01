import { useTranslation } from 'react-i18next';

export default function MainPage(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
}
