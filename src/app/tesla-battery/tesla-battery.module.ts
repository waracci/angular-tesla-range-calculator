import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//services
import { BatteryService } from './tesla-battery.service';
// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
//components
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
//tesla-stats
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
//tesla-counter
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
//tesla-climate
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
//tesla-wheels
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';

@NgModule({
  declarations: [
    // registering our container component
    TeslaBatteryComponent,
    //new add
    TeslaCarComponent,
    //stats
    TeslaStatsComponent,
    //counter
    TeslaCounterComponent,
    //climate
    TeslaClimateComponent,
    //wheels
    TeslaWheelsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [
    // exporting so our root module can access
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
