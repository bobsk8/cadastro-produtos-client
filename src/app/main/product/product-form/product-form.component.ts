import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() childSubmit = new EventEmitter<any>();
  product: Product;
  formulario: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.product = new Product();
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      price: [0, [Validators.required]]
    });
  }

  get form() { return this.formulario.controls; }

  onSubmit(formulario) {
    this.product = new Product();
    if (formulario.valid) {
      this.product.name = formulario.controls.name.value;
      this.product.price = parseInt(formulario.controls.price.value, 10);
      this.submitted = true;
      this.childSubmit.emit({product: this.product});
    }
  }

}
