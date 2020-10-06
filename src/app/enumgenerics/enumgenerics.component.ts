import { Component, OnInit } from '@angular/core';
import { Weekdays } from './weekdays';

@Component({
  selector: 'app-enumgenerics',
  templateUrl: './enumgenerics.component.html'
})
export class EnumgenericsComponent implements OnInit {
  selectedDate: any;
  dayNum: number;
  day: string;
  constructor() { }

  ngOnInit(): void {
  }
  getWeekDay() {
    this.dayNum = new Date(this.selectedDate).getDay();
    this.day = Weekdays[this.dayNum];
    this.dayNum = this.dayNum === 0 ? 7 : this.dayNum;
  }
}
