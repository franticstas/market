import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/guards/auth.guard';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import * as fromProductsReducer from 'src/app/pages/products/store/reducers/products.reducer';

import { AuthService } from './shared/services/auth.service';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { TestService } from './shared/services/test.service';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CategoriesEffects } from './pages/categories/state/categories.effects';

import { ProductsEffects } from './pages/products/store/effects/products.effects';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [AppComponent, ProductCardComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({
            products: fromProductsReducer.reducer,
        }),
        EffectsModule.forRoot([ProductsEffects, CategoriesEffects]),

        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: true, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        LayoutModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AuthGuard,
        AuthService,
        TestService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
