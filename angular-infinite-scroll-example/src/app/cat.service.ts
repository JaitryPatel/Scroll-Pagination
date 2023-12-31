import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCats(page: number): Observable<Cat[]> {
    return this.http.get(
      `https://api.thecatapi.com/v1/breeds?page=${page}&limit=10`
      // "https://dummy.restapiexample.com/api/v1/employees"
    ) as Observable<Cat[]>;
  }
}
