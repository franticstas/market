
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  images : string[] = [];

  productForm = this.fb.group({
    name : [''],
    description: [''],
    category: [''],
    // images: ['']
  })

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  preview(event: any) {
    let fileList: FileList = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
          this.images.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }      
    }
  }

  submit() {
    // let testData:FormData = new FormData();
    // for (let i = 0; i < this.images.length; i++) {
      
    // }
    // console.log(this.productForm.value);

    const product = this.productForm.value;
    this.productsService.createProduct(product)
  }
}
