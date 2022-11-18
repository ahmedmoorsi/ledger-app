import { createAction, props } from "@ngrx/store";
import { LedgerModel } from "src/app/models/ledger.model";

export const fetchLedgerDataAction = createAction('[Ledger API] API retrive API data');

export const updateLedgerData = createAction(
    '[Ledger API] Update ledger data in store',
    props<{ledgerData : LedgerModel[]}>() 
);