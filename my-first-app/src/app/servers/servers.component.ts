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

}
