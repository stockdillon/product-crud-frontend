import { ProductDetailsDto } from "../product-details/product-details.dto";

export interface DialogData {
    cancelled: boolean;
    product: ProductDetailsDto;
}
