import { IUserEntity } from './iuser'

export interface IEmployee {
    id?: number,
    name: string,
    cpf: number,
    dateofbirth: Date,
	zipcode: string,
	neighborhood: string,
	address: string,
	number: number,
	complement: string,
	city: string,
	state: string,
	user: IUserEntity
}