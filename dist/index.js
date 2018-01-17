"use strict";
var Batch = /** @class */ (function () {
    function Batch(options) {
        var _this = this;
        this._batch = [];
        this.add = function (obj) {
            _this._batch.push(obj);
            if (_this._options.batchSize
                && _this._options.batchSize <= _this._batch.length) {
                _this.execute();
            }
        };
        this.execute = function (callback) {
            _this._options.executeCallback = _this._options.executeCallback || callback;
            if (_this._options.executeCallback) {
                var ref = _this._batch;
                _this._batch = [];
                _this._options.executeCallback(ref);
            }
            return _this;
        };
        this._options = options;
    }
    return Batch;
}());
