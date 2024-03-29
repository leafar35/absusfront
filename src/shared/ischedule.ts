import { IPeople } from "./IPeople"

export interface ISchedule {
    id?: number
    title: string
    description: string
    dateTime: Date
    localization: string
    google_maps_link: string
    peopleId: number
    people?: IPeople
    appear?: boolean
}