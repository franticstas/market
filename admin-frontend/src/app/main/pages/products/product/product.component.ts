import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createProduct } from 'src/app/main/pages/products/state/products.action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  imagesToUpload: Array<File> = [];
  uri = environment.backendUrl;
  imagesPreview: string[] = [];

  productForm = this.fb.group({
    name : [''],
    description: [''],
    category: [''],
    product_images: [''],
  })

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
  }

  imageChangeEvent(fileInput: any) {
    this.imagesToUpload = <Array<File>> fileInput.target.files;

    if (fileInput.target.files && fileInput.target.files[0]) {
      for (let i = 0; i < fileInput.target.files.length; i++) {
        const file = new FileReader();
  
        file.onload = (event:any) => {
          this.imagesPreview.push(event.target.result);
        }
        file.readAsDataURL(fileInput.target.files[i]);
      }

  }
}

  submit() {
    const payload = {
      ...this.productForm.value,
      files: this.imagesToUpload
    }
    this.store.dispatch(createProduct(payload))
  }
}
