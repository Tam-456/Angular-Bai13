import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {

  @Input() parentData: any;

  @Output() childEvent = new EventEmitter();

  sendData(): void {
    let beerInfo = {
      name: "Heniken",
      price: 19000
    };

    this.childEvent.emit(beerInfo);
  }
}