import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { UsersService } from './users.service';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    CommonModule
  ]
})


export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        HttpService,
        MessagesService,
        UsersService
      ]
    };
  }
}
