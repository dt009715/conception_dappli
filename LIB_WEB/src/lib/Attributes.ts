export class Attributes<P extends object> {
    constructor(private data: P) {}

    get = <K extends keyof P>(propName: K) : P[K] => {
        return this.data[propName];
    }

    set(updatedData: Partial<P>) {
        Object.assign(this.data, updatedData)
    }

    getAll(): P {
        return this.data;
    }
}