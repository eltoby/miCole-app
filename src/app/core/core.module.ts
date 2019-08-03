
// imports esenciales de Angular
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports necesarios para nuestros servicios
import { HttpClientModule } from '@angular/common/http';

// imports de servicios

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
  ]
})

export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (
      @Optional() @SkipSelf() parentModule: CoreModule
    ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in 	AppModule please');
    }
  }

 }
