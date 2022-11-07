import { StateSchema } from 'app/providers/store-provider';
import { getCounter } from './get-counter';

describe('get-counter', () => {
    const state = {
        counter: { value: 20 },
    };

    it('should return counter slice', () => {
        expect(getCounter(state as StateSchema)).toEqual({ value: 20 });
    });
});
