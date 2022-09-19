import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';


const apiKey = 'coinrankinge2dde23171791f9c6bf4fceb201fbff8f99fba065bcdc3fe';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

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
  private chartUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  
  
  
  constructor(private http : HttpClient) { }

  url = 'https://dummyjson.com/products';

  url2 = 'https://dummyjson.com/users';

  data: any

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
  
  cryptoData() {
    const url = `${this.proxyUrl}${this.chartUrl}`;
    return this.http
      .get(url, httpOptions);
  }
}
