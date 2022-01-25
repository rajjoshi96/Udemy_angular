export class Recipe{
  public name: string;
  public description:string;
  public imgLink:string;



  constructor(name:string, desc:string,img:string){
    this.name=name;
    this.description=desc;
    this.imgLink=img;
  }
}


