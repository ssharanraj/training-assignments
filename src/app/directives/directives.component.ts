import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {
  toggleData: boolean = false;
  tableData: BankDetails[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.tableData.push(
      { name: 'Bruno', bankName: 'HDFC', accNo: '2456931807', kycVerified: true },
      { name: 'Paul', bankName: 'ICICI', accNo: '5741691822', kycVerified: true },
      { name: 'Marcus', bankName: 'SBI', accNo: '6321105544', kycVerified: false },
      { name: 'David', bankName: 'IOB', accNo: '8774110233', kycVerified: true },
      { name: 'Mason', bankName: 'HDFC', accNo: '69630320147', kycVerified: true },
      { name: 'Luke', bankName: 'ICICI', accNo: '10456899633', kycVerified: false },
      { name: 'Andreas', bankName: 'CUB', accNo: '36985214700', kycVerified: true },
      { name: 'Juan', bankName: 'AXIS', accNo: '65444125799', kycVerified: true });
  }
}
interface BankDetails {
  name: string;
  bankName: string;
  accNo: string;
  kycVerified: boolean;
}
