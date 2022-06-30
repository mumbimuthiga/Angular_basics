import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  //templateUrl: './warning-alert.component.html',
  template:`<h3>This is a warning</h3>`,
  //styleUrls: ['./warning-alert.component.css']
  styles:[
    `
    h3{
      border: 1px solid red;
      padding:20px;
      background-color:mistyrose;
    }
    `
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
