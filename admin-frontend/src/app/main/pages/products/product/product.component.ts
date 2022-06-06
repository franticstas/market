import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { createProduct, loadProductById } from 'src/app/main/pages/products/state/products.action';
import { IProduct } from 'src/app/shared/models/products.model';
import { environment } from 'src/environments/environment';
import { ProductsState, selectLoadedProduct } from '../state/products.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  imagesToUpload: Array<File> = [];
  uri = environment.backendUrl;
  imagesPreview: string[] = [];
  id: string = '';
  product!: IProduct;
  subscription!: Subscription;
  productForm!: FormGroup;

  // productForm = this.fb.group({
  //   name : [''],
  //   description: [''],
  //   category: [''],
  //   product_images: [''],
  // })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<ProductsState>
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      images: ['', Validators.required],
      price: ['', Validators.required]
    })
    
    if (this.id.length > 0) {
      const id = this.id
      this.store.dispatch(loadProductById({id}))
    }
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
