(function(app) {

    var Component = ng.core.Component;
    var TimerService = app.TimerService;

    app.HourComponent = Component({
        selector: 'hour',
        template: '<h1>Horário de Brasília: {{hour}}</h1>'
    })
    .Class({
        constructor: [TimerService, function HourComponent(timerService){
            let self = this;
            timerService.getCurrentHour(1000, function(hour) {
                self.hour = hour;
            });
        }]
    });

})(window.app || (window.app = {}));