import { IUserEntity } from './iuser'

export interface IPatientProps {
    id: number,
    name: string,
    dateofbirth: Date,
	user: IUserEntity
}