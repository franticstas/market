import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCategory } from '../state/categories.action';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  imageToUpload!: File;
  imagePreview = '';

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.categoryForm = this.fb.group({
      name: '',
      description: '',
      category_image: ''
    })
  }

  imageChangeEvent(fileInput: any) {
    this.imageToUpload = <File> fileInput.target.files;

    if (fileInput.target.files && fileInput.target.files[0]) {
      for (let i = 0; i < fileInput.target.files.length; i++) {
        const file = new FileReader();
  
        file.onload = (event:any) => {
          this.imagePreview = event.target.result;
        }
        file.readAsDataURL(fileInput.target.files[i]);
      }
    }
  }

  submit() {
    const payload = {
      ...this.categoryForm.value,
      file: {...this.imageToUpload}
    }
    
    this.store.dispatch(createCategory(payload))
  }
}
