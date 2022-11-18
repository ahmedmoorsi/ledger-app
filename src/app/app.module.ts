import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LedgerViewComponent } from './ledger-view/ledger-view.component';
import { LedgerTableComponent } from './ledger-table/ledger-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ledgerReducer } from './store/reducers/ledger.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LedgerEffects } from './store/effects/ledger.effects';
import { reducers } from './store';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LedgerComponent } from './ledger/ledger.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LedgerViewComponent,
    LedgerTableComponent,
    UserComponent,
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    //StoreModule.forRoot({ledger : ledgerReducer}, {}), // reducers
    StoreModule.forRoot(reducers), // reducers
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([LedgerEffects]),
    RouterModule.forRoot(routes),
  ],
  providers: [HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
