export class TimerService {
    
    private hour:string;
    
    private getHour(): string {
        return this.hour = new Date().toLocaleTimeString();
    }

    getCurrentHour(delay: number, callback: (hour: string) => void) {
        callback(this.getHour());
        setInterval(() => callback(this.getHour()), delay);
    }
    
}