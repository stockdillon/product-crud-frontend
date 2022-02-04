import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProduct } from './dialog';
import { DialogData } from './DialogData';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProduct, {
      width: '250px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed', result);
      this.name = result.name;
      // this.name = result;
    });
  }

  ngOnInit(): void {
  }

}
