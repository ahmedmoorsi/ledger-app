// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { map, Subscription } from "rxjs";
// import { Ledger } from "../models/ledger.model";

// @Injectable()
// export class LedgerService {


//   //private httpSubscription: Subscription;
//   data: Ledger[] = [];
//   headers: string[] = ["User Name", "ledgertype", "Date", "Amount"];
//   tableData: any[][] = [];

//   constructor(private httpClient: HttpClient) {
//     //this.httpSubscription = new Subscription();
//   }

//   loadLedgerData() {
//     return this.httpClient.get<Ledger[]>("/api/ledger").pipe(map((data) => data || [])); 
//     }
// }