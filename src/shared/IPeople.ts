import { IUserEntity } from './iuser'

export interface IPeople {
    id?: number,
    name: string,
    cpf: number,
    dateofbirth: Date,
	number_sus: number,
    number_post: number,
	zipcode: string,
	neighborhood: string,
	address: string,
	number: number,
	complement: string,
	city: string,
	state: string,
	user: IUserEntity
}