import { IPeople } from './IPeople'
import { ISchedule } from './ischedule';

export interface IPagination {
    data: Array<IPeople> | Array<ISchedule>,
    totalRows: number,
    perPage: number,
    page: number,
}