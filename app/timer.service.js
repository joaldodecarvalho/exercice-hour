(function(app) {
    let Class = ng.core.Class;

    app.TimerService = Class({
        constructor: function TimerService() {
            this.hour = hour;
        },

        getHour() {
            return this.hour = new Date().toTimeString();
        },

        getCurrentHour(delay, callback) {
            let self = this;
            callback(this.getHour());
            setInterval(function() {
                callback(self.getHour());
            }, delay);
        }
    });

    var hour = new Date().toTimeString() ;
})(window.app || (window.app = {}));