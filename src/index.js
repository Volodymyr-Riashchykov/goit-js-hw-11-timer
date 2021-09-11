class CountdownTimer {
    constructor({ selector, targetDate }) {
        // this.selector = document.querySelector(selector);
        this.targetDate = new Date(targetDate);
        
        this.refs = {
            fieldsDeys: document.querySelector(`${selector} span[data-value = 'days']`),
            fieldsHours: document.querySelector(`${selector} span[data-value = 'hours']`),
            fieldsMins: document.querySelector(`${selector} span[data-value = 'mins']`),
            fieldsSecs: document.querySelector(`${selector} span[data-value = 'secs']`)
            
        }
        this.indicationTime();
    
    }

    startTimer() {
        this.intervalId = setInterval(() => {
            this.indicationTime();
        }, 1000);
    }

    indicationTime() {
        this.currentTime = new Date();
        this.time = this.targetDate - this.currentTime;
        if (this.time < 0) {
            clearInterval(this.intervalId);
            this.time = 0;
        }
        this.timeText();
    }

    timeText() {
        this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
        this.refs.fieldsDeys.textContent = String(this.days).padStart(2, '0');
        
        this.hours = Math.floor(
            (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        this.refs.fieldsHours.textContent = String(this.hours).padStart(2, '0');
        
        this.mins = Math.floor(
            (this.time % (1000 * 60 * 60)) / (1000 * 60),
        );
        this.refs.fieldsMins.textContent = String(this.mins).padStart(2, '0');
        
        this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
        this.refs.fieldsSecs.textContent = String(this.secs).padStart(2, '0')
        
    }

    
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: 'december 19, 2021, 15:49',
});
countdownTimer.startTimer();
//