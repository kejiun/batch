class Batch<T> {

    private _options: IBatchOptions<T>;
    private _batch: Array<T> = [];

    constructor(options: IBatchOptions<T>) {
        this._options = options;
    }

    public add = (obj: T):void => {
        this._batch.push(obj);

        if (this._options.batchSize 
            && this._options.batchSize <= this._batch.length) {

            this.execute();
        }
    }

    public execute = (callback?: (objs: Array<T>) => void) => {
        
        this._options.executeCallback = this._options.executeCallback || callback;

        if (this._options.executeCallback) {
            let ref = this._batch;
            this._batch = [];

            this._options.executeCallback(ref);
        }

        return this;
    }
}

interface IBatchOptions<T> {
    batchSize?: number;

    executeCallback?: (objs: Array<T>) => void;
}