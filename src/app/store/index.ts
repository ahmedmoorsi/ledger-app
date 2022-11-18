// import { ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
// import { LedgerModel } from "../models/ledger.model";
// import { intialLedgerState, ledgerReducer, LedgerState } from "./reducers/ledger.reducer";

// export interface State {
//     ledger : LedgerState;
// }

// export const initialState : State = {
//     ledger: intialLedgerState
// }

// export const reducers: ActionReducerMap<State> = {
//     ledger : ledgerReducer
// }

// export const selectLedgerState = createFeatureSelector<LedgerState>("ledger"); 
// export const selectLedgerData = createSelector(selectLedgerState, (state:LedgerState) => state.ledgerData);

// export const selectLedgerTableData = createSelector(selectLedgerData , (data) => {
//     return data.flatMap (row => {
//         return row.ledger.items.map(item =>{
//           return [row.ledger.user , item.ledgerType , new Date (item.itemEpoch * 1000).toDateString() , item.amount];
//         })
//       })
// })


import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { LedgerModel } from "../models/ledger.model";
import { intialLedgerState, ledgerReducer, LedgerState } from "./reducers/ledger.reducer";


export interface State {
    ledger : LedgerState;
}

export const initialState : State = {
    ledger: intialLedgerState
}

export const reducers: ActionReducerMap<State> = {
    ledger : ledgerReducer
}



export const SelectLedgerState = createFeatureSelector<LedgerState>("ledger");
export const SelectLedgerData = createSelector(SelectLedgerState,(state:LedgerState)=>state.ledgerData);
export const SelectLedgerTableData = createSelector(SelectLedgerData,(data)=>{
    return data.flatMap(row => {
        return row.ledger.items.map(item=>{
            const xctDate:Date = new Date(item.itemEpoch*1000);
            const rowData = [row.ledger.user,item.ledgerType,xctDate.toDateString(),toCurrency(item.amount)];
            return rowData;
        })
    })
})
function toCurrency(amount:number):string{
    const formatter = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2,
        maximumFractionDigits:2
    });
    return formatter.format(amount);
}

