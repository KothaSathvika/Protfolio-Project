import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { SelectComponent } from './select/select.component';
import { UpdateComponent } from './update/update.component';
import { FindComponent } from './find/find.component';
import { DeleteComponent } from './delete/delete.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'select', pathMatch:'full'},
  // {path: 'login', component:LoginComponent },
  {path: 'select', component: SelectComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'find', component: FindComponent},
  {path: 'delete', component: DeleteComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
