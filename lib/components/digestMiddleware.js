"use strict";

exports.__esModule = true;
exports.default = digestMiddleware;
function digestMiddleware($rootScope) {
    return function (store) {
        return function (next) {
            return function (action) {
                var result = next(action);
                $rootScope.$evalAsync(result);
                return result;
            };
        };
    };
}