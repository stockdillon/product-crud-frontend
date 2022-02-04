import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "./DialogData";
import { ProductCreateComponent } from "./product-create.component";

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-product',
  templateUrl: 'dialog.html',
})
export class DialogProduct {
  // state: DialogData = {}
  constructor(
    public dialogRef: MatDialogRef<ProductCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
    console.log('data', data);
  }

  onNoClick(): void {
    this.data.cancelled = true;
    console.log('data', this.data);
    this.dialogRef.close();
  }
}
