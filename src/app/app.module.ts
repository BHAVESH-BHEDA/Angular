import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenRoute } from './template-driven/template-driven.routes';
import { ReactiveFormRoute } from './reactive-form/reactive-form.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TemplateDrivenRoute,
    ReactiveFormRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
