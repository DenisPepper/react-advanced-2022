import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { AppPopup } from 'shared/ui/app-popup/app-popup';
import { LoginForm } from '../login-form/login-form';

interface LoginPopupProps {
    className?: string;
    isOpened?: boolean;
    onClose?: () => void;
}

export function LoginPopup(props:LoginPopupProps):JSX.Element {
    const {
        className, isOpened, onClose,
    } = props;

    return (
        <AppPopup className={buildNames([className])} isOpened={isOpened} onClose={onClose} lazy>
            <LoginForm />
        </AppPopup>
    );
}
