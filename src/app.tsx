import { Counter } from './components/counter';
import './index.scss';

export const App = (): JSX.Element => {

    return(
        <div className='app'>
           app component
            <Counter/>
        </div>);
};