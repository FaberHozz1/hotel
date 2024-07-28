import { Component, inject } from '@angular/core';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { AdminFacade } from 'src/data/facades/admin.facade.';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CardComponent, ListComponent, MatTableModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.sass',
})
export class HotelsComponent {
  private _adminFacade = inject(AdminFacade);
  displayedColumns: string[] = ['id', 'name', 'address', 'phone'];
  dataSource = this._adminFacade.requestHotels();
}
