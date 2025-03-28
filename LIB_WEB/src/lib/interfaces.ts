import { AxiosPromise } from "axios";
import { CallbackFn } from "./Eventing";

export interface HasId {
    id?: string
}

export interface IModelEvents {
    on(eventName: string, callback: CallbackFn): void;
    trigger(eventName: string): void;
}

export interface IModelAttributes<P> {
    set(value: P): void;
    get<K extends keyof P>(propName: K) : P[K]
    getAll(): P;
}

export interface IModelSync<P> {
    fetch(id: string): AxiosPromise;
    save(data: P): AxiosPromise;
}