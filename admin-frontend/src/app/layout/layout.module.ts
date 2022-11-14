import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component'
import { ClearLayoutComponent } from 'src/app/layout/clear-layout/clear-layout.component'
import { MaterialModule } from 'src/app/shared/modules/material.module'

@NgModule({
    declarations: [MainLayoutComponent, ClearLayoutComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
})
export class LayoutModule {}
