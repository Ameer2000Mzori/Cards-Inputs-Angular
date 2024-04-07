import { Component } from '@angular/core';
import { dataList } from './cardData';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  datas = dataList;

  getData(data: any): any {
    console.log(data);
  }
  deleteData(gottenData: any): void {
    this.datas = this.datas.filter((data) => data.id !== gottenData.id);
  }
}
