import { useTranslation } from 'react-i18next';

export default function AboutPage(): JSX.Element {
    const { t } = useTranslation('about-page');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
}
