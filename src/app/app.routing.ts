import { Routes } from '@angular/router';
import { PatientPortalComponent } from './components/patient-portal/patient-portal.component';

export const routes: Routes = [
  { path: '', component: PatientPortalComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];