export class Ingredients{
  // public amount:number;
  // public name:string;
  // constructors can be passed public keyword and thereby remove the above two lines

  constructor(public name:string,public amount:number){
	  this.name=name;
	  this.amount=amount;
  }
}
