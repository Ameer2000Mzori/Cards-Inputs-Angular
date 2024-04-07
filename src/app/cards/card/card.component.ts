import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = 'Card Title';

  @Input() data: string = 'Card Data';

  @Input() id: number = 0;

  @Input() type: string = 'card type';

  @Input() img: string = 'card img';

  @Output() cardData = new EventEmitter<string>();
  @Output() cardId = new EventEmitter<number>();

  getData(info: any): void {
    this.cardData.emit(info);
  }

  deleteData(dataId: number): void {
    this.cardId.emit(dataId);
  }
}
