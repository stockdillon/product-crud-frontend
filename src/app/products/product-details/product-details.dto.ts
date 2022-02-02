export interface IProductDetailsDto {
    name: string;
    description: string;
    price: number;
}

export class ProductDetailsDto implements IProductDetailsDto {
    constructor(init?: IProductDetailsDto) {
        Object.assign(this, init);
    }
    name: string = '';
    description: string = '';
    price: number = 0;
}