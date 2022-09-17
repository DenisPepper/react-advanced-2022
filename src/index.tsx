import { render } from 'react-dom';
import { Counter } from "./components/counter";

const root = document.getElementById('root') as HTMLElement;

render(
    <Counter />,
 root
);