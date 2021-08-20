class CountdownTimer {
    constructor({  targetDate }) {
        this.targetDate = new Date(targetDate);
        this.indicationTime();
        document.querySelector('head').innerHTML += `<style>
      .timer {
        display: flex;
        font-size: 1.5em;
      }
      .field {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 40px;
      }
      .value {
        font-size: 4.5em;
      }
    </style>`;
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
        document.querySelector(' [data-value=days]').textContent = String(this.days).padStart(2, '0');

        this.hours = Math.floor(
            (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        document.querySelector(' [data-value=hours]').textContent = String(this.hours).padStart(2, '0');

        this.mins = Math.floor(
            (this.time % (1000 * 60 * 60)) / (1000 * 60),
        );
        document.querySelector(' [data-value=mins]').textContent = String(this.mins).padStart(2, '0');

        this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
        document.querySelector(' [data-value=secs]').textContent = String(this.secs).padStart(2, '0')
    }
}
const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: 'october 21, 2021, 15:49',
});
countdownTimer.startTimer();
//