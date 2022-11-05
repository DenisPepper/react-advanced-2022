import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

export default function MainPage(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
    );
}
