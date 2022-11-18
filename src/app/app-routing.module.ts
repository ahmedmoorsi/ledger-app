import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerViewComponent } from './ledger-view/ledger-view.component';
import { LedgerComponent } from './ledger/ledger.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path : 'user',
    pathMatch:'prefix',
    component:UserComponent,
    children:[
      {
        path:':id', 
        pathMatch:'full',
        component:UserComponent,      
      }
    ]
  }
  ,
  {
    path:'',
    pathMatch:'full',
    component: LedgerComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
