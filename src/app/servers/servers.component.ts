import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector:'.app-servers',
 // template: `
  //<app-server></app-server>
  //<app-server></app-server>`,

  templateUrl:'./servers.component.html',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //Property Binding
  allowNewServer=false;
  serverCreationStatus="No server was created";
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }
  //End of data binding

  //Event Binding
  onCreateServer(){
    this.serverCreationStatus="Server was created";
  }
  ngOnInit(): void {
    
  }
  //DataBinding(Communication between typescript and html)
  //String Interpolation
  serverId:number=10;
  serverStatus:String='offline';

  getServerStatus(){
    return this.serverStatus;
  }

  
  
 

  

  

}
