import { LowerCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, concatMap, filter, Observable, BehaviorSubject, map, tap, of } from 'rxjs';
import { IProductDetailsDto } from './product-details/product-details.dto';

interface IProductFilter {
  isSatisfied(product: IProductDetailsDto): boolean;
}

// class ProductFilter {
//   name: string = 'macbook'
// }

interface ProductResponse {
  product: IProductDetailsDto;
}

interface IUserSelections {
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _userSelections$: BehaviorSubject<IUserSelections> = new BehaviorSubject<IUserSelections>({name: 'macbook'});
  private _userSelections: IUserSelections = {};
  public set userSelections(selections: IUserSelections) {
    Object.assign(this._userSelections, selections);
    this._userSelections$.next(this._userSelections);
  }

  filter: BehaviorSubject<IProductFilter[]> = new BehaviorSubject<IProductFilter[]>([]);
  products$: Observable<IProductDetailsDto[]> = this.filter.pipe(
    concatMap((filtr: IProductFilter[]) => {
      return this.getProducts(filtr)
    })
  )
  products: IProductDetailsDto[] = [];
  productCache: {[key:string]: IProductDetailsDto} = {};

  constructor(
    private http: HttpClient,
    private lowerCase: LowerCasePipe,
  ) { }

  getProducts(filter: IProductFilter[] = []): Observable<IProductDetailsDto[]> {
    return this.http.get<IProductDetailsDto[]>('/api/products').pipe(
      map((products: IProductDetailsDto[]) => {
        return products.filter(p => {
          const unsatisfiedFilters = filter.filter(f => !f.isSatisfied(p));
          return unsatisfiedFilters.length === 0;
        })
      }),
      tap((products: IProductDetailsDto[]) => {
        this.products = products;
      })
    );
  }

  getProduct(name?: string): Observable<IProductDetailsDto> {
    let productName: string;
    productName = name ?? this._userSelections.name ?? '';
    productName = this.lowerCase.transform(productName);
    if(productName in this.productCache) return of(this.productCache[productName]);
    return this.http.get<ProductResponse>(`/api/products/${name}`).pipe(
      map((res: ProductResponse) => {
        return res.product;
      }),
      tap((product: IProductDetailsDto) => {
        this.productCache[productName] = product;
      })
    );
  }  
}
