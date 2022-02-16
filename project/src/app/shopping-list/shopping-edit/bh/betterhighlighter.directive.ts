import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlighter]'
})
export class BetterhighlighterDirective implements OnInit{

  constructor(private elref:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.elref.nativeElement.setStyle(this.elref.nativeElement,'background-color','blue');

  }
}
