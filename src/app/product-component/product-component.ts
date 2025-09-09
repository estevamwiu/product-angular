import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent implements OnInit { //implementa a interface OnInit para usar o método ngOnInit

  products: Product[] = [];
  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProductService) { //injeção de dependência do FormBuilder e do ProductService

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      description: ['']
    });
  }
  ngOnInit(): void { //todas as vezes que inicializar o componente, o código que estiver aqui será executado
    this.service.getAllProducts().subscribe(
      {
        next: json => this.products = json
      }
    ); //se é observable do outro lado, aqui será subscribe
  }
  
  save(){
    this.service.save(this.formGroupProduct.value).subscribe({
      next: json => {
        this.products.push(json);
        this.formGroupProduct.reset();
      }
    });
  }
}
