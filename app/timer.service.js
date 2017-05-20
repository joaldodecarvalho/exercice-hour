System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimerService;
    return {
        setters:[],
        execute: function() {
            TimerService = (function () {
                function TimerService() {
                }
                TimerService.prototype.getHour = function () {
                    return this.hour = new Date().toLocaleTimeString();
                };
                TimerService.prototype.getCurrentHour = function (delay, callback) {
                    var _this = this;
                    callback(this.getHour());
                    setInterval(function () { return callback(_this.getHour()); }, delay);
                };
                return TimerService;
            }());
            exports_1("TimerService", TimerService);
        }
    }
});
