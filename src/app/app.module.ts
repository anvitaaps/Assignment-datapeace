import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatHorizontalStepper,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
  } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';

import { FuseMainModule } from './main/main.module';


const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/content/apps/apps.module#FuseAppsModule',
        // canActivate: [AuthGuard]
    },
    {
        path      : '**',
        redirectTo: '/apps/users',
    },
];

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatIconModule,
        MatStepperModule,
        MatOptionModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        // AmazingTimePickerModule
     ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      FormsModule,
      ReactiveFormsModule,
    //   AmazingTimePickerModule
    ],
    declarations: [
    ]
  })
  export class MaterialModule {};

@NgModule({
    
    imports     : [
        MaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
             delay             : 0,
             passThruUnknownUrl: true
         }),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
    ],
    declarations: [
        AppComponent,
    ],
    
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
