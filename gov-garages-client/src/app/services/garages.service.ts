import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Garage } from '../models/garage';
@Injectable({
  providedIn: 'root',
})
export class GaragesService {
  private apiUrl = 'http://localhost:5000/api/garages';
  garagesSubject = new BehaviorSubject<{newGarages: Garage[];garages: Garage[];}>({ newGarages: [], garages: [] });

  constructor(private http: HttpClient) {}

  addDBgarages(garages: Garage[]) {
    this.http.put<Garage[]>(this.apiUrl + '/addgarages', garages)
      .subscribe((newGarages) =>
        this.garagesSubject.next({
          newGarages: newGarages ? newGarages : [],
          garages,
        })
      );
  }

  getGovgarages(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiUrl + '/fetchDataGov');
  }

  getDBgarages(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiUrl + '/getgarages');
  }
}
