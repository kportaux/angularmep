import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Login} from '../../core/login/model/loginmodel';

@Directive({
  selector: '[appShowusernow]'
})
export class ShowusernowDirective implements OnInit {
  @Input() logindir: string;
  objrender: any;

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.objrender = null;
  }

  ngOnInit() {
    this.objrender = this.renderer.createText(this.logindir + ' from directive');
    this.renderer.appendChild(this.elem.nativeElement, this.objrender);
  }
}
