import { Component, Input, OnInit } from '@angular/core';
import { IProductDetailsDto, ProductDetailsDto } from './product-details.dto';
import { Observable, of, BehaviorSubject, tap } from 'rxjs';
import { ProductService } from './../product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  form: FormGroup;
  @Input() name: string | null = null;
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('macbook');
  product: IProductDetailsDto = new ProductDetailsDto();
  product$: Observable<ProductDetailsDto> = of(this.product);
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    ) { 
    this.form = this.fb.group({
      name: new FormControl(this.product.name),
      description: new FormControl(this.product.description),  
      price: new FormControl(this.product.price),  
    });
    // this.form.get('name')?.patchValue(this.product.name);
    // this.product.name = name;

    this.name = (this.name || this.route.snapshot.paramMap.get('name')) ?? '';
    this.product$ = this.productService.getProduct(this.name).pipe(
      tap((p: ProductDetailsDto) => {
        this.form.get('name')?.patchValue(p.name);
        this.form.get('description')?.patchValue(p.description);
        this.form.get('price')?.patchValue(p.price);
      })
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const updatedProduct = new ProductDetailsDto({
      name: new String(this.form.get('name')?.value).toString(),
      description: new String(this.form.get('description')?.value).toString(),
      price: +this.form.get('price')?.value,
    })
    // console.log(Object.entries(this.form.controls).map(i => (i[0], i[1])));
    // console.log(this.form.controls);
    console.log('updated product', updatedProduct);
  }

}
