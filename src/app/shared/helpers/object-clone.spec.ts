import { ObjectClone } from './object-clone';

describe('ObjectClone', () => {

    it('should return object JSON', () => {
        expect(ObjectClone.cloneTo({ id: 1 })).toEqual({ id: 1 });
    });

});
