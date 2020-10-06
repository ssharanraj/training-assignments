import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LifecycleService } from './lifecycle.service';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnInit {

  timestamp: Date;
  countries: string[] = [];
  states: string[] = ['Please select your country first'];
  selectedState: string;

  formGroup: FormGroup;
  constructor(private lifeCycleService: LifecycleService) { }

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }
  createForm() {
    this.formGroup = new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    });
  }
  loadData() {
    this.timestamp = new Date();
    this.countries = this.lifeCycleService.getCountries();
    this.countries.unshift('Select your Country');
  }
  onSelectingCountry(country) {
    this.updateFormcontrol('country', country);
    this.states = ['Select your State', ...this.lifeCycleService.getStates(country)];
  }
  onSelectingState(state) {
    this.updateFormcontrol('state', state);
  }
  buttonDisable() {
    if (
      !this.formGroup.get('fullname').errors && (this.formGroup.get('fullname').touched || this.formGroup.get('fullname').dirty) &&
      !this.formGroup.get('email').errors && (this.formGroup.get('email').touched || this.formGroup.get('email').dirty) &&
      !this.formGroup.get('country').errors && (this.formGroup.get('country').touched || this.formGroup.get('country').dirty) &&
      !this.formGroup.get('state').errors && (this.formGroup.get('state').touched || this.formGroup.get('state').dirty)
    ) {
      return false;
    }
    return true;
  }
  updateFormcontrol(field, value) {
    if (value === 'Select your Country' || value === 'Select your State') {
      this.formGroup.get(field).patchValue('');
      this.formGroup.get(field).markAsUntouched();
    } else {
      this.formGroup.get(field).patchValue(value);
      this.formGroup.get(field).markAsDirty();
      this.formGroup.get(field).markAsTouched();
    }
  }
  submit() {
    alert('Name: ' + this.formGroup.get('fullname').value + '\n' +
      'Email: ' + this.formGroup.get('email').value + '\n' +
      'Country: ' + this.formGroup.get('country').value + '\n' +
      'State: ' + this.formGroup.get('state').value);
  }
}
