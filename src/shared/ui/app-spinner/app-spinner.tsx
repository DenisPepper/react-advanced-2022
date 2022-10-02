import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import './app-spinner.scss';

type AppSpinnerProps = {
    className?: string
}

export function AppSpinner(props: AppSpinnerProps): JSX.Element {
    const { className } = props;
    return (
        <div className={buildNames(['lds-spinner', className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
