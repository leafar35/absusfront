import { ReactNode } from "react";
import { IProfileEntity } from "./iprofile"

export interface IChildrenAuthProvider {
    children?: ReactNode
};

export interface IAuthProvider {
    logged: Boolean,
    signIn(inputData: object): void,
    sigOuth(): void,
    profile: IProfileEntity
    isLoading: boolean
}