import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './components/Logout/logout.component';
import { OutputComponent } from './components/Output/output.component';
import { FormComponent } from './components/Form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    OutputComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    OutputComponent,
    LogoutComponent
  ]
})
export class AuthModule { }
