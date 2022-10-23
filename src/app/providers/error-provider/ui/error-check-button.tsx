import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/app-button/app-button';

// Компонент для тестирования ErrorBoundary
export function ErrorCheckButton() {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const handleOnClick = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <AppButton
            onClick={handleOnClick}
        >
            {t('throw error')}
        </AppButton>
    );
}
