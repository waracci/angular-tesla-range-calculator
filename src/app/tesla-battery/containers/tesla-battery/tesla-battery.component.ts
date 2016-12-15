/*
* tesla-battery.component.ts
 */    
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'tesla-battery',
  template: `
  <form class="tesla-battery" [formGroup]="tesla">
      <h1>{{ title }}</h1>
    <div class="tesla-battery__notice">
        <p>
          The actual amount of range that you experience will vary based 
          on your particular use conditions. See how particular use conditions 
          may affect your range in our simulation model.
        </p>
        <p>
          Vehicle range may vary depending on the vehicle configuration, 
          battery age and condition, driving style and operating, environmental 
          and climate conditions.
        </p>
      </div>
  </form>  
  `,
  styleUrls: ['./tesla-battery.component.scss']
})

export class TeslaBatteryComponent implements OnInit {
  
  title: string = 'Range Per Charge';
  tesla: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.tesla = this.fb.group({
      config: this.fb.group({
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      })
    });
  }

}