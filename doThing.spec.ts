import {five} from "./doThing";

describe('Five function', function () {
    test('returns 5', () => {
        expect(five()).toBe(5);
    })
});
