import { Component } from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styleUrls:['./server.component.css'],
})
export class ServerComponent{
    playerID: number = 11;
    playerstatus: string = 'online';
    gameName = 'COD: Modern Warfare';
    getPlayerID(){
      return this.playerID;
    }

    getPlayerStatus(){
      return this.playerstatus;
    }

}
