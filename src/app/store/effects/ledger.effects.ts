import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";
import { LedgerModel } from "src/app/models/ledger.model";
import { fetchLedgerDataAction, updateLedgerData } from "../actions/ledger.action";


@Injectable()
export class LedgerEffects {
    
    fetchLedgers$ = createEffect(()=> this.actions$
    .pipe(
        ofType(fetchLedgerDataAction),
        switchMap(() => {
            return this.httpClient.get<LedgerModel[]>("/api/ledger").pipe(
                map((data) => updateLedgerData({ledgerData:data}),
                catchError(()=> of(updateLedgerData({ledgerData:[]})))
                ));
        })
    ));


    constructor(
        private actions$: Actions,
        private store:Store,
        private httpClient: HttpClient
    ){}
}