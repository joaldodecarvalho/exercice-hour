import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimerService } from './timer.service';
import { HourComponent } from './hour.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HourComponent],
    providers: [TimerService],
    bootstrap: [AppComponent]
})
export class AppModule {}