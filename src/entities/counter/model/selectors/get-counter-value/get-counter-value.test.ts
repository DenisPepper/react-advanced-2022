import { StateSchema } from 'app/providers/store-provider';
import { getCounterValue } from './get-counter-value';

describe('get-counter-value', () => {
    const state = {
        counter: { value: 20 },
    };

    it('should return 20', () => {
        expect(getCounterValue(state as StateSchema)).toBe(20);
    });
});
