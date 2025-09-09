import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products'; //atributo que irá apontar para o servidor json-server (configuração)
  constructor(private http: HttpClient) { } //injeção de dependência do HttpClient para fazer as requisições HTTP

  getAllProducts(): Observable<Product[]>{ //método que retorna um Observable de um array de produtos 
  // observable (chamada não bloqueante)
    return this.http.get<Product[]>(this.apiUrl); //faz uma requisição GET para a apiUrl e retorna um Observable de um array de produtos
  }

  save(product: Product): Observable<Product> { 
    return this.http.post<Product>(this.apiUrl, product);
  }
}

