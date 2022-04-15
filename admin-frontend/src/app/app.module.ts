import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({products: productsReducer})
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
