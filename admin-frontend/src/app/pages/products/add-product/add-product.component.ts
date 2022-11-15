import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IImage, IProduct } from 'src/app/shared/types/products.interface';
import { environment } from 'src/environments/environment';
import { createProduct } from '../store/actions/products.action';
import { ProductsState } from '../store/selectors/products.selectors';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
    imagesToUpload: Array<File> = [];
    uri = environment.backendUrl;
    imagesPreview: string[] = [];
    product!: IProduct;
    subscription!: Subscription;
    productForm!: FormGroup;
    loadImages: IImage[] = [];

    constructor(
        private fb: FormBuilder,
        private store: Store<ProductsState>,
        private ref: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required],
            product_images: ['', Validators.required],
            countInStock: ['', Validators.required],
        });
    }

    imageChangeEvent(fileInput: any) {
        this.imagesToUpload = <Array<File>>fileInput.target.files;

        if (fileInput.target.files && fileInput.target.files[0]) {
            for (let i = 0; i < fileInput.target.files.length; i++) {
                const file = new FileReader();

                file.onload = (event: any) => {
                    this.imagesPreview.push(event.target.result);
                };
                file.readAsDataURL(fileInput.target.files[i]);
            }
        }
    }

    submit() {
        if (!this.productForm.valid) {
            return;
        }

        const payload = {
            product: this.productForm.value,
            files: this.imagesToUpload,
        };

        console.log(payload);

        this.store.dispatch(createProduct(payload));
    }
}
