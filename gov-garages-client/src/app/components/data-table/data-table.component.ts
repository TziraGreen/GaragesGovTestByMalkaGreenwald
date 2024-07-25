import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Garage } from 'src/app/models/garage';
import { GaragesService } from 'src/app/services/garages.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  data: any[] = [];
  garages: Garage[] = [];
  garagessubscription$!: Observable<Garage[]>;
  displayedColumns!: string[];
  garagesSubject;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private garagesService: GaragesService,private toster: ToastrService) {
    this.garagessubscription$ = this.garagesService.getDBgarages();
    this.garagesSubject = garagesService.garagesSubject;
  }
  ngOnInit(): void {
    this.subscribeGaragesDB();
  }

  subscribeGaragesDB() {
    this.garagessubscription$.subscribe((garages) => {
      this.garages = garages;
      this.data = this.garages;
      if (this.garages && this.garages.length) {
        this.displayedColumns = Object.keys(this.garages[0]);
      }
    });

    this.garagesSubject.subscribe((object) => {
      if (!object.garages.length) {
        return;
      }
      if (object.garages.length > object.newGarages.length) {
        this.toster.error(
          'חלק מהמוסכים שנבחרו או כולם לא נוספו כיוון שהם כבר קיימים במאגר הנתונים'
        );
      } else {
        if (object.garages.length == object.newGarages.length) {
          this.toster.success('כל המוסכים שנבחרו נוספו בהצלחה למאגר הנתונים');
        }
      }
      this.data = [...this.data, ...object.newGarages];
      console.log(this.data);
      if (this.data && this.data.length) {
        this.displayedColumns = Object.keys(this.data[0]);
      }
      this.table && this.table.renderRows();
    });
  }
}
