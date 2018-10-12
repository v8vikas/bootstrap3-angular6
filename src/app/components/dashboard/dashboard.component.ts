import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient/patient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = "Sexual Health Patient Portal"
  patients: any[] = [];
  selectedPatirent: any;
  selectedPatirents: any[] = [];
  allSelected: boolean = false;

  constructor(private patientService: PatientService) { }

  findPatients(): void {
    this.patientService.findPatients({}).subscribe((patients) => {
      this.patients = patients;
    })
  }

  newIndividualMessage(patient: any): void {
    this.selectedPatirent = patient;
  }

  addRemove(event: any, patient: any): void {
    const selectedIndex = this.selectedPatirents.findIndex((v) => v.patientRegKey === patient.patientRegKey);
    const patientIndex = this.patients.findIndex((v) => v.patientRegKey === patient.patientRegKey);
    this.patients[patientIndex].isChecked = this.patients[patientIndex].isChecked;
    if (event.target.checked) {
      this.selectedPatirents.push(patient);
    } else {
      this.selectedPatirents.splice(selectedIndex, 1);
    }

    if (this.selectedPatirents.length === this.patients.length) {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }
  }

  addRemoveAll(event: any): void {
    this.allSelected = !this.allSelected;
    console.log('-------', this.allSelected)
    if (event.target.checked) {
      this.patients = this.changeAllCheckedStatus(true);
      this.selectedPatirents = new Array(this.patients);
    } else {
      this.patients = this.changeAllCheckedStatus(false);
      this.selectedPatirents = [];
    }

    this.selectedPatirent = null;
  }

  changeAllCheckedStatus(value: boolean): any[] {
    return this.patients.map(v => {
      v['isChecked'] = value;
      return v;
    });
  }

  ngOnInit() {
  }

}
