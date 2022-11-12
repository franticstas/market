import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginComponent } from 'src/app/pages/auth/containers/login/login.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { MaterialModule } from 'src/app/shared/modules/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        AuthRoutingModule,
    ],
})
export class AuthModule {}
