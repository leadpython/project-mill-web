import { Component, OnInit } from '@angular/core';
// import { NgFor } from "@angular/common";
import { DatePickerOptions, DateModel } from 'app/components/datepicker/datepicker.component';

@Component({
  selector: 'app-vendor-profile-page',
  templateUrl: './vendor-profile-page.component.html',
  styleUrls: ['./vendor-profile-page.component.css']
})
export class VendorProfilePageComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions;
  timeSlots: object[] = [
    { available: true, startTime: 8, endTime: 8 + 0.5},
    { available: true, startTime: 8, endTime: 8 + 0.5},
    { available: true, startTime: 8, endTime: 8 + 0.5},
    { available: true, startTime: 8, endTime: 8 + 0.5},
    { available: true, startTime: 8, endTime: 8 + 0.5},
    { available: true, startTime: 8, endTime: 8 + 0.5},
    { available: true, startTime: 8, endTime: 8 + 0.5},
  ];

  constructor() {
    this.options = new DatePickerOptions();
  }
  ngOnInit() {
    for (let i = 8; i <= 17.5; i = i + 0.5) {
      let timeSlot = { available: true, startTime: i, endTime: i + 0.5};
      this.timeSlots.push(timeSlot);
    }
  }
  datepickerEvent(event) {
    this.date =  event.data;
  }

}

/*
Vendors can create/edit available services and set their duration
Cients cannot book time slots for services that will take longer
Full page steps
Sound effects
Notifications
*/
