import { Component, OnInit } from '@angular/core';
import { Timestamp } from './timestamp';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timeStamp: TimeLog = { date: '', time: '' };

  constructor() { }

  ngOnInit(): void {
    this.setValues();
  }
  setValues() {
    let date = new Date();
    this.timeStamp.date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    this.timeStamp.time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }
}
interface TimeLog extends Timestamp {
  time: string;
}
