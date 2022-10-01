import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import { Link, LinkProps } from 'react-router-dom';
import cls from './app-link.module.scss';

export const enum AppLinkThemes {
    Primary = 'primary',
    Secondary = 'secondary',
    Special = 'special',
}

type AppLinkProps = {
    className?: string
    theme?: AppLinkThemes;
} & LinkProps

export function AppLink(props: AppLinkProps) {
    const {
        className,
        theme = AppLinkThemes.Primary,
        children,
        to: path,
        ...restProps
    } = props;

    return (
        <Link
            to={path}
            className={buildNames([className, cls[theme], cls.app_link])}
            {...restProps}
        >
            {children}
        </Link>
    );
}
