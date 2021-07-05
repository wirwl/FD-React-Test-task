import {qeCalc} from './utils';

describe('Check roots calculation for quadratic equation', ()=> {
    test('If the discriminant is positive, then there are two distinct roots', () => {
        expect(qeCalc(4, -6, 0)).toStrictEqual([0, 1.5]);
    });

    test('If the discriminant is negative, then there are no real roots', () => {
        expect(qeCalc(1, 2, 3)).toStrictEqual([]);
    });

    test('If the discriminant is zero, then there is exactly one real root', () => {
        expect(qeCalc(3, -18, 27)).toStrictEqual([3]);
    });
});