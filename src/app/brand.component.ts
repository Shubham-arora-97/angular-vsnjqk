import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brand1',
  templateUrl: './brand.component.html',
  styles: [`h1 { font-family: Lato; }`]
})

export class BrandComponent{
  @Input() brandName: string;
  @Input() brandLink: string;
  @Input() brandLogo: string;
  @Input() brandDesc: string;

  @Output() removeBrandEvent: EventEmitter<string> = new EventEmitter<string>();

  removeBrand(){
    this.removeBrandEvent.emit(this.brandName);
  }

}