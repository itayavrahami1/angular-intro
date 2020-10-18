import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  isDark: Boolean;
  seasonImgCls: String;
  clockInterval = undefined;
  time: any;
  season: String;

  constructor() { }

  ngOnInit(): void {
    this.isDark = false;
    this.clockInterval = setInterval(() => {
      this.setClock();
    }, 1000);
  }


  ngOnDestroy(): void {
    clearInterval(this.clockInterval);
  }

  setClock(): any {
    const time = new Date();
    this.getSeason(time);
    const timeToDisp = new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(time);

    this.time = timeToDisp;
  }

  getSeason(time): void {
    const currMonth = time.getMonth() + 1; // monthes are from 0-11
    var currSeason;
    if (currMonth === 12 || (currMonth > 0 && currMonth < 3))
      currSeason = "winter";
    else if (currMonth >= 3 && currMonth < 6) currSeason = "spring";
    else if (currMonth >= 6 && currMonth < 9) currSeason = "summer";
    else if (currMonth >= 9 && currMonth < 12) currSeason = "fall";
    this.season = currSeason;
    this.seasonImgCls = `season-img ${currSeason}`
  }

  toggleDark(): void {
    console.log('click');
    this.isDark = !this.isDark
  }


}
