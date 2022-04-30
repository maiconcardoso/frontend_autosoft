import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'

import { BrowserModule } from '@angular/platform-browser';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    FilterPipeModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    HttpClientModule,
    CurrencyMaskModule,
    FilterPipeModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    TabsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
})
export class SharedModule { }
