import { IUserEntity } from './iuser'

export interface IPatient {
    id?: number,
    name: string,
    cpf: number,
    dateofbirth: Date,
	zipcode: string,
	neighborhood: string,
	address: string,
	number: number,
	complement: string,
	user: IUserEntity
}