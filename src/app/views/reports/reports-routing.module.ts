import { ReportsbaseComponent } from './reportsbase/reportsbase.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports'
    },
    children: [
      {
        path: '',
        component: ReportsbaseComponent,
        data: {
          title: ''
        },
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: {
          title: 'Summary'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
