import { Component, Input, OnInit } from '@angular/core'
import { IProduct } from 'src/app/shared/types/products.interface'

@Component({
    selector: 'app-product-preview',
    templateUrl: './product-preview.component.html',
    styleUrls: ['./product-preview.component.scss'],
})
export class ProductPreviewComponent implements OnInit {
    @Input() product!: IProduct

    constructor() {}

    ngOnInit(): void {}
}
