import { IUserEntity } from "./iuser"

export interface IProfileEntity {
    name: string
    cpf: number
    dateofbirth: Date
    zipcode: string
    address: string,
    neighborhood: string
    number: string
    complement: string
    city: string
    state: string
    user: IUserEntity
}