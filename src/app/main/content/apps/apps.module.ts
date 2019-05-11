import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { AuthGuard } from 'app/auth.guard';


const routes = [
    {
        path        : 'users',
        loadChildren : './users/users.module#UsersModule',
        // canActivate: [AuthGuard]
    },
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class FuseAppsModule
{
    public static API_ENDPOINT=environment.api_endpoint; 
    
}
