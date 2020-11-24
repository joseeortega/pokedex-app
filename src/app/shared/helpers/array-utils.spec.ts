import { ArrayUtils } from './array-utils';

describe('ArrayUtils', () => {

    it('should paginate splitting array received on 3 elements', () => {
        const arrayToPaginate: any[] = [
            {
                id: 1,
                name: 'hola'
            },
            {
                id: 2,
                name: 'adios'
            }, {
                id: 3,
                name: 'juan'
            },
            {
                id: 4,
                name: 'hola'
            },
            {
                id: 5,
                name: 'adios'
            }, {
                id: 6,
                name: 'jose'
            }
        ];

        const arrayPaginated1: any[] = [
            {
                id: 1,
                name: 'hola'
            },
            {
                id: 2,
                name: 'adios'
            }, {
                id: 3,
                name: 'juan'
            }
        ];

        const arrayPaginated2: any[] = [
            {
                id: 4,
                name: 'hola'
            },
            {
                id: 5,
                name: 'adios'
            }, {
                id: 6,
                name: 'jose'
            }
        ];

        expect(ArrayUtils.paginateDataSource(arrayToPaginate, { pageIndex: 0, pageSize: 3 })).toEqual(arrayPaginated1);
        expect(ArrayUtils.paginateDataSource(arrayToPaginate, { pageIndex: 1, pageSize: 3 })).toEqual(arrayPaginated2);
    });

});
