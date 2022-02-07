import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { concatMap, Subject } from 'rxjs';
import { ProductDetailsDto } from '../product-details/product-details.dto';
import { ProductService } from '../product.service';
import { DialogProduct } from './dialog';
import { DialogData } from './DialogData';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  dialogData: DialogData = {
    cancelled: false,
    product: new ProductDetailsDto(),
  }
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private service: ProductService,
    private _snackBar: MatSnackBar,
  ) {}

  product$: Subject<ProductDetailsDto> = new Subject<ProductDetailsDto>();
  create$ = this.product$.pipe(
    concatMap((product: ProductDetailsDto) => {
      console.log('product created:', product);
      this._snackBar.open(`${product.name} Created!`, 'close')
      return this.service.createProduct(product);
    })
  )

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProduct, {
      width: '250px',
      data: this.dialogData,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if(this.dialogData.cancelled) {
        console.log('The action was cancelled');
        return;
      }
      this.product$.next(this.dialogData.product);
    });
  }

  ngOnInit(): void {
  }

}
