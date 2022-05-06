import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  // @Input() name = ''
  // @Input() description = ''
  // @Input() images = []
  // @Input() category = ''
  @Input() product: IProduct = []

  constructor() { }

  ngOnInit(): void {
  }

}
