import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        SharedModule,
        AdminRoutingModule,
        SubNavComponent,
        LayoutComponent,
        OverviewComponent
    ],
    declarations: []
})
export class AdminModule { }
