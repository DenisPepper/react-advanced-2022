import { counterReducer, counterActions } from '../slice/counter-slice';
import { CounterSchema } from '../types/counter-schema';

describe('counter-slice', () => {
    const counterSlice:CounterSchema = { value: 20 };

    it('should increment from 20 to 21', () => {
        expect(counterReducer(counterSlice, counterActions.increment)).toEqual({ value: 21 });
    });

    it('should decrement from 20 to 19', () => {
        expect(counterReducer(counterSlice, counterActions.decrement)).toEqual({ value: 19 });
    });

    it('should set initial state and increment from 0 to 1', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
