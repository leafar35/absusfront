import { ReactNode } from "react";
import { IProfileEntity } from "./iprofile"

export interface IChildrenAuthProvider {
    children?: ReactNode
};

export interface IAuthProvider {
    logged: Boolean,
    region: Boolean,
    setRegionId(value: string): void,
    signIn(inputData: object): void,
    sigOuth(): void,
    profile: IProfileEntity
    isLoading: boolean
}