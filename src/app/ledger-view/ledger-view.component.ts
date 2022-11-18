import { Component, OnInit, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { Ledger } from '../models/ledger.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { fetchLedgerDataAction } from '../store/actions/ledger.action';


@Component({
  selector: 'app-ledger-view',
  templateUrl: './ledger-view.component.html',
  styleUrls: ['./ledger-view.component.scss']
})
export class LedgerViewComponent implements OnInit {

  headers: string[] = ["User Name" , "ledgertype" , "Date", "Amount"];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(fetchLedgerDataAction());
  }

  goToUser(){
    this.router.navigate(['user']);
  }

}
