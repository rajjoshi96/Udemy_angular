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
  servername='';
  serverCreated=false;
  setServerStatus = "No server is created";
  serverNumber = 30;
  serverStatus:string = 'online';
  servers=['Server1','Server2']



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


      this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.servername);
    this.setServerStatus="Server is created! name is " + this.servername;
    console.log(this.servername);
  }

  SetServerName(event: Event){
    this.servername=(<HTMLInputElement>event.target).value;
    // HTML input element to take up precise target and value of the HTML tag
  }

  getColor(){
    return this.serverStatus==="online"?'green':'red';
  }


}
