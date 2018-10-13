import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient/patient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  title: string = "Sexual Health Patient Portal"
  patients: any[] = [];
  selectedPatirent: any;
  selectedPatients: any[] = [];
  allSelected: boolean = false;
  searchForm: FormGroup;
  type: string = '';
  isOptionChecked: boolean;
  message: string = '';

  constructor(
    private patientService: PatientService,
    private messagesService: MessagesService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      lastName: [''],
      emr: [''],
      dob: [''],
      dov: [''],
    });

    this.messagesService.onClose.subscribe(() => {
      this.selectedPatients = [];
    })

    this.messagesService.onSuccess.subscribe((type) => {
      this.selectedPatients = [];
      this.message = `Message ${type} successfully.`
    })

  }

  findPatients(): void {
    var searchBy = _.omitBy(this.searchForm.value, (value) => {
      return !value;
    })

    this.patientService.findPatients(searchBy).subscribe((patients) => {
      this.patients = patients;
      this.patients = this.changeAllCheckedStatus(false);
    })
  }

  newIndividualMessage(patient: any): void {
    this.type = 'Individual';
    this.selectedPatients = [patient];
  }

  newGroupIndividualMessage(): void {
    this.type = 'Group';
    this.selectedPatients = this.getAllCheckedPatients();
  }

  addRemove(event: any, patient: any): void {

    const patientIndex = this.patients.findIndex((v) => v.patientRegKey === patient.patientRegKey);
    if (patientIndex !== -1) {
      this.patients[patientIndex].isChecked = event.target.checked;
    }

    const checkedIndexes = this.getAllCheckedPatients();

    if (checkedIndexes && checkedIndexes.length) {
      this.isOptionChecked = true;
    } else {
      this.isOptionChecked = null;
    }

    if (checkedIndexes.length === this.patients.length) {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }
  }

  getAllCheckedPatients(): any[] {
    return this.patients.filter((v) => v.isChecked);
  }

  addRemoveAll(event: any): void {
    this.allSelected = event.target.checked;

    if (this.allSelected) {
      this.isOptionChecked = true;
    } else {
      this.isOptionChecked = null;
    }

    this.patients = this.changeAllCheckedStatus(this.allSelected);
  }

  changeAllCheckedStatus(value: boolean): any[] {
    return this.patients.map(v => {
      v['isChecked'] = value;
      return v;
    });
  }

}
