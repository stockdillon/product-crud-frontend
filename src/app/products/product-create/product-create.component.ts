import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  // product: ProductDetailsDto = new ProductDetailsDto();
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private service: ProductService,
  ) {}

  openDialog(): void {
    // const dialogData: DialogData = {
    //   cancelled: false,
    //   product: this.product,
    // }
    const dialogRef = this.dialog.open(DialogProduct, {
      width: '250px',
      data: this.dialogData,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if(this.dialogData.cancelled) {
        console.log('The action was cancelled');
        return;
      }
      // TODO: remove subscribe
      this.service.createProduct(this.dialogData.product).subscribe(r => {
        
      });
      // this.router.navigateByUrl(`/product/edit/${this.product.name}`);
    });
  }

  ngOnInit(): void {
  }

}
