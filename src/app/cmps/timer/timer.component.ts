import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timer: Object;
  isTimer: Boolean;
  targetTime = Date.now() + 1000 * 80;
  timerInterval = undefined;
  timerCls: String

  constructor() { }

  ngOnInit(): void {
    this.isTimer = false
    this.timerInterval = setInterval(() => {
      console.log('timer');
      
      this.setTimer();
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  setTimer() {
    let timerClass;
    const timeLeftInSec = Math.round((this.targetTime - Date.now()) / 1000);
    var minutesLeft: any = Math.floor(timeLeftInSec / 60);
    let secLeft: any = timeLeftInSec % 60;

    const minLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;

    if (secLeft < 10) {
      secLeft = "0" + secLeft;
      if (!minutesLeft) timerClass = "end-of-time";
    }

    if (minLeft === "00" && secLeft === "00") {
      clearInterval(this.timerInterval);
      timerClass = "";
      this.playSound();
    }

    this.timer = { minLeft, secLeft };
    this.timerCls = timerClass;
    this.isTimer = true
  }

  playSound(): void{
    const soundToPlay = new Audio("../../../assets/sounds/done.mp3");
    soundToPlay.play();
}

}
