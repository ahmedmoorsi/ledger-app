export interface Item
{
    itemId: string,
    itemName: string,
    itemEpoch: number,
    ledgerType: string,
    amount: number
}

export interface Ledger{
    //ledger:{
        items:Item[],
        user:string
   // }
}


export interface LedgerModel{
    ledger : Ledger
}
