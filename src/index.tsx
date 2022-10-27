import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import './app/styles/index.scss';
import { ThemeProvider } from 'app/providers/theme-provider';
import './shared/config/i18n-config';
import { ErrorProvider } from 'app/providers/error-provider';
import { ROOT } from 'shared/settings';

render(
    <BrowserRouter>
        <ErrorProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorProvider>
    </BrowserRouter>,
    ROOT,
);
