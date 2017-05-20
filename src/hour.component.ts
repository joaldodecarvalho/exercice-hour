import { Component } from '@angular/core';

import { TimerService } from './timer.service';

@Component({
    selector: 'hour',
    template: '<h1>Horário de Brasília: {{hour}}</h1>'
})
export class HourComponent {

    hour: string;

    constructor(timerService: TimerService) {
        timerService.getCurrentHour(1000, hour => this.hour = hour)
    }
}