import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { UtilityService } from './services/utility.service';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { SelectComponent } from './select/select.component';
import { UpdateComponent } from './update/update.component';
import { FindComponent } from './find/find.component';
import { DeleteComponent } from './delete/delete.component';
// import { LoginComponent } from './login/login.component';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SelectComponent,
    UpdateComponent,
    FindComponent,
    DeleteComponent,
    // LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    // UtilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
