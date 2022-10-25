import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import cls from './navbar.module.scss';

type NavbarProps = {
    className?: string;
}

export function Navbar(props: NavbarProps): JSX.Element {
    const { className } = props;

    return (
        <div className={buildNames([cls.navbar, className])} />
    );
}
