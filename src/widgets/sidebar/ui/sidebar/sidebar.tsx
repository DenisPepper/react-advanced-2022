import cls from './sidebar.module.scss';
import {buildNames} from "shared/lib/build-css-class-names";
import {useState} from "react";
import {ThemesSwitcher} from "shared/ui/themes-switcher";

type SidebarProps = {
    className?: string;
};

export function Sidebar():JSX.Element {
    const [cuddled, setCuddled] = useState(false);

    const onToggle = () => {
        setCuddled((prev) => !prev);
    };

    return (
        <div className={buildNames([cls.sidebar], {[cls.cuddled]: cuddled})}>
            <button onClick={onToggle}>toggle</button>
            <div className={buildNames([cls.switchers])}>
                <ThemesSwitcher />
            </div>
        </div>
    );
}
