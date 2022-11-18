import { createReducer, on } from "@ngrx/store";
import { LedgerModel } from "src/app/models/ledger.model";
import { updateLedgerData } from "../actions/ledger.action";


export interface LedgerState {
    ledgerData: LedgerModel[];
}


export const intialLedgerState : LedgerState ={
    ledgerData: []
}

export const ledgerReducer = createReducer(
    intialLedgerState,
    on(updateLedgerData, (state,{ledgerData}) =>{
        const newState = {
            ...state,
            ledgerData: ledgerData
        };
        return newState;
    })
);