import { Component } from '@angular/core';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CardComponent, ListComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.sass',
})
export class HotelsComponent {}
