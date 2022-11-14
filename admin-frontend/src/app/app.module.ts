import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthGuard } from './shared/guards/auth.guard'
import { StoreModule } from '@ngrx/store'

import * as fromProductsReducer from 'src/app/pages/products/store/reducers/products.reducer'

import { EffectsModule } from '@ngrx/effects'

// import { MatSidenavModule } from '@angular/material/sidenav'
// import { MatListModule } from '@angular/material/list'
// import { MatIconModule } from '@angular/material/icon'
// import { MatToolbarModule } from '@angular/material/toolbar'
// import { MatExpansionModule } from '@angular/material/expansion'
// import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { AuthService } from './shared/services/auth.service'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtInterceptor } from './helpers/jwt.interceptor'
import { TestService } from './shared/services/test.service'
import { ProductCardComponent } from './shared/components/product-card/product-card.component'

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { CategoriesEffects } from './mainDEL/pages/categories/state/categories.effects'
// import { LayoutModule } from './layout/layout.module'
import { ProductsEffects } from './pages/products/store/effects/products.effects'
import { MaterialModule } from './shared/modules/material.module'

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

        // LayoutModule,

        // MatSidenavModule,
        // MatListModule,
        // MatIconModule,
        // MatToolbarModule,
        // MatExpansionModule,
        // MatCardModule,
        MatFormFieldModule,
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
