import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Products {
  id: number;
  title: string;
  thumbnail: string;
  images: string;
  description: string;
  brand: string;
  category: string;
  stock: number;
  price: number;
}

export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  birthDate: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http : HttpClient
  ) { }

  url = 'https://dummyjson.com/products';

  url2 = 'https://dummyjson.com/users';

  getDataProduct(): Observable<Products[]>{
    return this.http.get<Products[]>(this.url);
  }

  getDetailProduct(id: string): Observable<Products[]>{
    return this.http.get<Products[]>(this.url + '/' + id);
  }

  getDataUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.url2);
  }

  getDetaiUser(id: string): Observable<Users[]>{
    return this.http.get<Users[]>(this.url2 + '/' + id);
  }
}
