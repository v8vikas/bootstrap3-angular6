import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { UsersComponent } from './components/users/users.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MessagesComponent } from './components/messages/messages/messages.component';
import { AddMessageComponent } from './components/messages/add-message/add-message.component';
import { ProfileComponent } from './components/users/profile/profile.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'patient/:id', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'add-message', component: AddMessageComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];