import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import cls from './app-text.module.scss';
import background from '../../assets/icons/user-32-32.png';

export const enum TextTheme {
    Error = 'error'
}

interface AppTextProps {
    className?: string,
    header?: string,
    textContent?: string,
    theme?: TextTheme
}

export function AppText(props: AppTextProps): JSX.Element {
    const {
        className, header, textContent, theme = null,
    } = props;

    return (
        <div
            className={buildNames([cls.app_text, cls[theme], className])}
            // style={{ backgroundImage: `url(${background})` }}
        >
            {header
                && (
                    <p className={buildNames([cls.header])}>
                        {header}
                    </p>
                )}
            {textContent
                && (
                    <p className={buildNames([cls.textContent])}>
                        {textContent}
                    </p>
                )}
        </div>
    );
}
