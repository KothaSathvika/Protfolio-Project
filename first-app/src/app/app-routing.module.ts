import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  {path: '', redirectTo:'select', pathMatch:'full'},
  { path: 'select', component: SelectComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
