declare class Batch<T> {
    private _options;
    private _batch;
    constructor(options: IBatchOptions<T>);
    add: (obj: T) => void;
    execute: (callback?: ((objs: T[]) => void) | undefined) => this;
}
interface IBatchOptions<T> {
    batchSize?: number;
    executeCallback?: (objs: Array<T>) => void;
}
