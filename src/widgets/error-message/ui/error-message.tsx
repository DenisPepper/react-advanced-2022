import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/app-button/app-button';
import cls from './error-message.module.scss';

interface ErrorMessageProps {
    className?: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
    const { className } = props;
    const { t } = useTranslation();

    const handleOnClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={buildNames([cls.error_message, className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <AppButton onClick={handleOnClick}>
                {t('Обновить страницу')}
            </AppButton>
        </div>
    );
}
