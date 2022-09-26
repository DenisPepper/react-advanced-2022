import './styles/index.scss';
import {useTheme} from "app/providers/theme-provider";
import {buildNames} from "shared/lib/build-css-class-names";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";

export default function App(): JSX.Element {
    const {theme, toggleTheme} = useTheme();
    return(
        <div className={buildNames(['app', theme], {})}>
            <button onClick = {toggleTheme}>switch theme</button>
            <Navbar />
            <AppRouter />
        </div>
    );
};