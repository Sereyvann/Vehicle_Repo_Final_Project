import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/Form/form.component';
import { LogoutComponent } from './components/Logout/logout.component';
import { OutputComponent } from './components/Output/output.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'output', component: OutputComponent },
  { path: 'logout', component: LogoutComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
