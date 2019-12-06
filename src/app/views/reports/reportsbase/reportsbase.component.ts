import { Component, OnInit } from '@angular/core';
import { aggregateReportItems, transactionReportItems } from '../../../_reports';

@Component({
  selector: 'app-reportsbase',
  templateUrl: './reportsbase.component.html',
  styleUrls: ['./reportsbase.component.css']
})
export class ReportsbaseComponent implements OnInit {

  aggregateReportItems = aggregateReportItems;
  transactionReportItems = transactionReportItems;

  constructor() { }

  ngOnInit() {
  }

}
