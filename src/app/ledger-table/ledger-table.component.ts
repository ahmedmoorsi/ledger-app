import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ledger } from '../models/ledger.model';
import { SelectLedgerTableData } from '../store';

@Component({
  selector: 'app-ledger-table',
  templateUrl: './ledger-table.component.html',
  styleUrls: ['./ledger-table.component.scss']
})
export class LedgerTableComponent implements OnInit {
  @Input() tableData:any[][] = [];
  //@Input() tableData: Ledger [] = [];
  @Input() headers : string[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(SelectLedgerTableData).subscribe(data=> {this.tableData = data});
  }

}
