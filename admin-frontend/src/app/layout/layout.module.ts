import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainLayoutComponent } from './main-layout/main-layout.component'
import { ClearLayoutComponent } from './clear-layout/clear-layout.component'

@NgModule({
    declarations: [MainLayoutComponent, ClearLayoutComponent],
    imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
