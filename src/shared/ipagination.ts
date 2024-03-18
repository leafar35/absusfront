import { IPeople } from './IPeople'

export interface IPagination {
    data: Array<IPeople>,
    totalRows: number,
    perPage: number,
    page: number,
}