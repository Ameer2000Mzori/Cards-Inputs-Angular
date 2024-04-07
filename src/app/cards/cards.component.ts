import { Component } from '@angular/core';
import { dataList } from './cardData';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  datas = dataList;

  getData(data: any): any {
    console.log(data);
  }
  deleteData(dataId: number): void {
    this.datas = this.datas.filter((data) => data.id !== dataId);
  }
}
