import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DependencyInjectionService {
  URL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getServiceListForCar(model: string) {
    let _url = this.URL + model;
    return this.http.get(_url);
  }
}
