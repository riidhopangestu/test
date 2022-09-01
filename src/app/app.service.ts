import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Products {
  id: number,
  title: string,
  description: string,
  price: number,
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http : HttpClient
  ) { }

  url = 'https://dummyjson.com/products';

  getDataProduct(): Observable<Products[]>{
    return this.http.get<Products[]>(this.url);
  }
}
