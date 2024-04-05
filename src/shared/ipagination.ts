import { IPeople } from './IPeople'
import { IEmployee } from './iemployee';
import { ISchedule } from './ischedule';

export interface IPagination {
    data: Array<IPeople> | Array<ISchedule> | Array<IEmployee>,
    totalRows: number,
    perPage: number,
    page: number,
}