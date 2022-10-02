import { useTranslation } from 'react-i18next';
import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import cls from './not-found-page.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export function NotFoundPage(props: NotFoundPageProps): JSX.Element {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={buildNames([cls.not_found_page, className])}>
            {t('Страница не найдена')}
        </div>
    );
}
