import { Pagination } from '../models/pagination.model';
import { ObjectClone } from './object-clone';

export class ArrayUtils {

    constructor() { }

    /**
     * Init the data source based on block course element applying pagination received
     * @param: arr; array to chunk
     * @param: paginatin; page event object to base the chunk process
     * @return: array chunked
     */
    static paginateDataSource(arr: any[], pagination: Pagination): any[] {
        const arrElementsChunked: any[] = ObjectClone.cloneTo(arr);

        const firstPosChunk: number = pagination.pageIndex * pagination.pageSize;
        const lastPosChunk: number = (pagination.pageIndex * pagination.pageSize) + pagination.pageSize;

        return arrElementsChunked.slice(firstPosChunk, lastPosChunk);
    }

}
