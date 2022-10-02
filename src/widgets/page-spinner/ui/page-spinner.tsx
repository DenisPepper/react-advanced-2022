import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { AppSpinner } from 'shared/ui/app-spinner/app-spinner';
import cls from './page-spinner.module.scss';

type PageSpinnerProps = {
    className?: string
}

export function PageSpinner(props: PageSpinnerProps): JSX.Element {
    const { className } = props;
    return (
        <div className={buildNames([cls.page_spinner, className])}>
            <AppSpinner />
        </div>
    );
}
