import { AppButton } from 'shared/ui/app-button/app-button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';

export function Counter(): JSX.Element {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{value}</h1>
            <AppButton onClick={increment}>+</AppButton>
            <AppButton onClick={decrement}>-</AppButton>
        </div>
    );
}
