import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = "Profile";
  patient: any;
  activeTestResult: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {

    this.loadPatient();
  }

  loadPatient(): void {
    this.patientService.getPatientRecord('id').subscribe((patient)=>{
      this.patient = patient;
      this.activeTestResult = this.patient.testResults[0];
    })
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' , block: 'start'});
  }
}
