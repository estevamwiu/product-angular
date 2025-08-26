import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent {

  products: Product[] = [];
  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      description: ['']
    });
  }
  save() {
    this.products.push(this.formGroupProduct.value);
    this.formGroupProduct.reset();
  }
}
