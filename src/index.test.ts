import { noop } from ".";

describe('simple test', () => {
    it('should call noop with no open handles', () => {
        noop();
    });
});