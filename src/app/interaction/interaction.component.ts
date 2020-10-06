import { Component, OnInit, TemplateRef } from '@angular/core';
import { CarConstants } from './carDetails';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html'
})
export class InteractionComponent implements OnInit {
  modalRef: BsModalRef;
  cars: string[] = [];
  carDetails: any[] = [];
  selectedCar: any[] = [];

  rowArray: any[] = [];
  valueObject: any = {};

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.carDetails = [...CarConstants.CAR_DETAILS];
    this.carDetails.map(i => {
      this.cars.push(i.model);
    })
    this.rowArray.push(
      [{ label: 'Model Make', value: 'model_make_id' }, { label: 'Model Year', value: 'model_year' }, { label: 'Engine Position', value: 'model_engine_position' }],
      [{ label: 'Engine CC', value: 'model_engine_cc' }, { label: 'Engine Torque', value: 'model_engine_torque_nm' }, { label: 'Drive', value: 'model_drive' }],
      [{ label: 'Transmission Type', value: 'model_transmission_type' }, { label: 'Mileage', value: 'model_lkm_mixed' }, { label: 'Make Country', value: 'make_country' }]
    );
  }

  getCarDetails(model: string, carModal: TemplateRef<any>) {
    this.selectedCar = this.carDetails.filter(function (e) {
      return e.model === model;
    })
    this.valueObject = this.selectedCar[0];
    this.modalRef = this.modalService.show(carModal, { backdrop: 'static', keyboard: false });
  }
}
