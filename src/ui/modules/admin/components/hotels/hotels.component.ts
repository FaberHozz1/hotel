import { Component } from '@angular/core';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatTableModule } from '@angular/material/table';

export interface IHotel {
  id: number;
  name: string;
  address: number;
  phone: string;
}

const ELEMENT_DATA: IHotel[] = [
  { id: 1, name: 'Hydrogen', address: 1.0079, phone: 'H' },
  { id: 2, name: 'Helium', address: 4.0026, phone: 'He' },
  { id: 3, name: 'Lithium', address: 6.941, phone: 'Li' },
  { id: 4, name: 'Beryllium', address: 9.0122, phone: 'Be' },
  { id: 5, name: 'Boron', address: 10.811, phone: 'B' },
  { id: 6, name: 'Carbon', address: 12.0107, phone: 'C' },
  { id: 7, name: 'Nitrogen', address: 14.0067, phone: 'N' },
  { id: 8, name: 'Oxygen', address: 15.9994, phone: 'O' },
  { id: 9, name: 'Fluorine', address: 18.9984, phone: 'F' },
  { id: 10, name: 'Neon', address: 20.1797, phone: 'Ne' },
];

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CardComponent, ListComponent, MatTableModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.sass',
})
export class HotelsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
