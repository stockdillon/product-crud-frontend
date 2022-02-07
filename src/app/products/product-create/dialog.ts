import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormControlOptions, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductDetailsDto } from "../product-details/product-details.dto";
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
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private currency: CurrencyPipe,
    private decimal: DecimalPipe,
    public dialogRef: MatDialogRef<ProductCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    console.log('data', data);
    const priceOptions: FormControlOptions = {
      validators: [Validators.min(1), Validators.max(20000)],
      updateOn: 'blur',
    }
    this.form = this.fb.group({
      name: new FormControl('', [Validators.minLength(3), Validators.maxLength(100)]),
      description: new FormControl('', [Validators.minLength(5), Validators.maxLength(1000),]),
      price: new FormControl(null, priceOptions),
    });
  }

  onNoClick(): void {
    this.data.cancelled = true;
    console.log('data', this.data);
    this.dialogRef.close();
  }

  onSubmit() {
    const name = new String(this.form.get('name')?.value).toString();
    const newProduct = new ProductDetailsDto({
      name: name,
      description: new String(this.form.get('description')?.value).toString(),
      price: +this.form.get('price')?.value,
    })
    console.log('updated product', newProduct);
    this.data.product = newProduct;
    this.dialogRef.close();
  }

  priceToCurrency(price: string) {
    this.form.patchValue({ price: this.decimal.transform(price, '0.2-2')?.replace(',','') });
  }
}
