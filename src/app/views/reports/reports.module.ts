import { TableComponent } from './table/table.component';
import { SummaryComponent } from './summary/summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsbaseComponent } from './reportsbase/reportsbase.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ReportsbaseComponent,
    SummaryComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ReportsModule { }
