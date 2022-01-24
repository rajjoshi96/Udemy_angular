import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  playerID: number = 11;
  playerstatus: string = 'online';
  gameName = 'COD: Modern Warfare';
  status =false;
  servername='testserver';
  setServerStatus = "No server is created";
  getPlayerID(){
    return this.playerID;
  }

  getPlayerStatus(){
    return this.playerstatus;
  }


  allowNewServer = false;
  constructor() {
      setTimeout(()=>{
        this.allowNewServer = true;
      },1000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.setServerStatus="Server is created! name is " + this.servername;
  }

  SetServerName(event: Event){
    this.servername=(<HTMLInputElement>event.target).value;
    // HTML input element to take up precise target and value of the HTML tag
  }
}
