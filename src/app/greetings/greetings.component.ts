import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  test: any;
  greet: Greetings;
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.greet = new Greetings('This is a private object', 'This is a public object', 'This is a protected object');
  }
  accessGreetingClass() {
    let newGreet = new Greetings('This is a private object', 'This is a public object', 'This is a protected object(ext)');
    return newGreet.accessVariable();
  }
}

class Greetings {
  constructor(private msgA: string, public msgB: string, protected msgC: string) {
  }

  accessVariable() {
    return this.msgA + ' ' + this.msgB + ' ' + this.msgC;
  }
}

