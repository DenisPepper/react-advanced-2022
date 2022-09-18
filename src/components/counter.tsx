import {Fragment, useState} from "react";
import classes from './counter.module.scss';

export const Counter = (): JSX.Element => {
    const [count, setCount] = useState(0);
    const onButtonClick = () => setCount(count + 1)

    return(
        <Fragment>
            <h1>{ count } </h1>
            <button onClick={onButtonClick}>increment</button>
        </Fragment>);
};