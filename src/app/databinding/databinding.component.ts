import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html'
})
export class DatabindingComponent implements OnInit {
  toggleOneWay: boolean = false;
  toggleTwoWay: boolean = false;
  animals: any[] = [];
  selectedAnimal: string;
  text: string;
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.animals.push(
      { id: -1, name: "Select", value: 'Select' },
      { id: 0, name: "Elephant", value: 'elephant' },
      { id: 1, name: "Leopard", value: 'leopard' },
      { id: 2, name: "Lion", value: 'lion' },
      { id: 3, name: "Zebra", value: 'zebra' },
      { id: 4, name: "Tiger", value: 'tiger' },
    );
  }
  dropDownChange(animal: string) {
    animal === 'Select' ? this.selectedAnimal = undefined : this.selectedAnimal = animal.toLowerCase();
  }

}
