import { Component, Input, OnInit } from '@angular/core';
import { IProductDetailsDto, ProductDetailsDto } from './product-details.dto';
import { Observable, of, BehaviorSubject, tap, concatMap, filter, Subject, combineLatest, map, catchError } from 'rxjs';
import { ProductService } from './../product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  form: FormGroup;
  @Input() name: string = '';
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  product$: Observable<ProductDetailsDto> = this.name$.pipe(
    filter((name: string) => !!name ),
    concatMap((name: string) => {
      return this.productService.getProduct(name);
    }),
    tap((p: ProductDetailsDto) => {
      // this.form.get('name')?.patchValue(p.name);
      this.form.get('description')?.patchValue(p.description);
      this.form.get('price')?.patchValue(p.price);
    })
  );

  
  updateProduct$: Subject<ProductDetailsDto> = new Subject<ProductDetailsDto>();
  update$: Observable<{status: boolean}> = combineLatest([this.name$, this.updateProduct$]).pipe(
    concatMap(([name, product]) => {
      return this.productService.updateProduct(name, product).pipe(
        map((value: IProductDetailsDto) => {
          return {status: true};
        })
      )
    }),
    catchError(e => {
      return of({status: false});
    })
  );

  // updated$
  // message$: Observable<string> = combinel
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    ) { 
    // this.form.get('name')?.patchValue(this.product.name);
    // this.product.name = name;


    if(this.name == ''){
      this.name = (this.route.snapshot.paramMap.get('name')) ?? '';
    }
    this.name$.next(this.name);

    this.form = this.fb.group({
      name: new FormControl(this.name, [Validators.minLength(3), Validators.maxLength(100)]),
      description: new FormControl('', [Validators.minLength(5), Validators.maxLength(1000)]),  
      price: new FormControl(0, [Validators.min(1), Validators.max(20000)]),  
    });    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const name = new String(this.form.get('name')?.value).toString();
    const updatedProduct = new ProductDetailsDto({
      name: name,
      description: new String(this.form.get('description')?.value).toString(),
      price: +this.form.get('price')?.value,
    })
    // console.log(Object.entries(this.form.controls).map(i => (i[0], i[1])));
    // console.log(this.form.controls);
    console.log('updated product', updatedProduct);
    // this.productService.updateProduct(name, updatedProduct);
    this.updateProduct$.next(updatedProduct);
  }

}
