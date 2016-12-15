import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our feature module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // include the tesla battery module
    TeslaBatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
