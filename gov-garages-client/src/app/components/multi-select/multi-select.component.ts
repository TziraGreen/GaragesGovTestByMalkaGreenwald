import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Garage } from 'src/app/models/garage';
import { GaragesService } from 'src/app/services/garages.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  garageValues = new FormControl();
  garages!: Garage[];
  garagesSubscription$: Observable<Garage[]>;
  selectedToppings: any;
  constructor(private garagesService: GaragesService) {
    this.garagesSubscription$ = this.garagesService.getGovgarages();
  }

  ngOnInit(): void {
    this.subscribeGarages();
  }

  subscribeGarages() {
    this.garagesSubscription$.subscribe((garages) => {
      this.garages = garages;
    });
  }

  addDBGarages() {
    this.garagesService.addDBgarages(
      this.garages.filter((garage) =>
        this.garageValues.value.includes(garage._id)
      )
    );
  }
}
