import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule, MatToolbarModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule, MatButtonModule, MatSidenavModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatLabel, MatListModule, MatSlideToggleModule, MatDividerModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { UsersComponent } from './users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
    {
        path     : 'user-details/:id',
        component: UserDetailsComponent
        // canActivate: [AuthGuard]
    },
    {
        path     : 'list-user',
        component: ViewUsersComponent,
        // canActivate: [AuthGuard]
    },
    {
        path     : '**',
        component: ViewUsersComponent,
        // canActivate: [AuthGuard]
    }
]

@NgModule({
    declarations: [
        UsersComponent,
        ViewUsersComponent,
        UserDetailsComponent
    ],
    entryComponents: [],
    imports     : [
        RouterModule.forChild(routes),
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        FuseSharedModule,
        NgxDatatableModule,
        FuseWidgetModule,
        MatDividerModule
    ],
    providers   : [
    ]
})
export class UsersModule
{
}
