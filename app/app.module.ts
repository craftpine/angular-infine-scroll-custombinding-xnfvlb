import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpModule,
    ToolbarModule,
    GridAllModule,
    BrowserModule,
    NumericTextBoxAllModule,
    DialogModule,
    DatePickerAllModule,
    DropDownListAllModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
