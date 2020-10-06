import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LifecycleService {

  private list;
  private countries: string[] = [];
  private states: string[] = [];

  constructor(private httpClient: HttpClient) { }

  getCountries() {
    this.httpClient.get("assets/countryState.json").subscribe((data: any) => {
      this.list = data;
      data.countries.map(c => {
        this.countries.push(c.country);
      })
    })
    return this.countries;
  }
  getStates(country: string) {
    let stateslist;
    stateslist = this.list.countries.filter(function (i) {
      return i.country === country;
    });
    this.states = stateslist[0].states;
    return this.states;
  }
}
