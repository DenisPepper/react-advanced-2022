import { buildNames } from 'shared/lib/build-css-class-names';
import { useState } from 'react';
import { ThemesSwitcher } from 'shared/ui/themes-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/ui/lang-switcher';
import cls from './sidebar.module.scss';

export function Sidebar():JSX.Element {
    const [cuddled, setCuddled] = useState(false);

    const onToggle = () => {
        setCuddled((prev) => !prev);
    };

    return (
        <div className={buildNames([cls.sidebar], { [cls.cuddled]: cuddled })}>
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={buildNames([cls.switchers])}>
                <ThemesSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
