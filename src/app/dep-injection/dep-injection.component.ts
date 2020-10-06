import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DependencyInjectionService } from './dep-injection.service';

@Component({
  selector: 'app-dep-injection',
  templateUrl: './dep-injection.component.html',
  styleUrls: ['./dep-injection.component.css']
})
export class DepInjectionComponent implements OnInit {

  modalRef: BsModalRef;
  cars: string[] = [];
  selectedCar: string;
  serviceList: string[];
  constructor(private service: DependencyInjectionService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.cars.push('Volkswagen Jetta', 'Ford Mustang', 'Audi Q5',
      'Jeep Wrangler', 'Chevrolet Silverado');
  }

  getServiceList(modal: string,serviceModal: TemplateRef<any>) {
    this.selectedCar = modal;
    modal = modal.replace(' ', '_');
    this.service.getServiceListForCar(modal).subscribe((res: any) => {
      console.log('Mock Server Res', res);
      this.serviceList = res.model_services;
      this.modalRef = this.modalService.show(serviceModal, { backdrop: 'static', keyboard: false });
    })
  }
}
