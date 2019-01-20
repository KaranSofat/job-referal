import { Component, OnInit } from '@angular/core';
declare var $:any;
import 'src/assets/js/countdowntime.js';
@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $('.cd100').countdown100({
			endtimeYear: 55,
			endtimeMonth: 0,
			endtimeDate: 35,
			endtimeHours: 18,
			endtimeMinutes: 0,
			endtimeSeconds: 0,
			timeZone: "" 
		});
  }

}
