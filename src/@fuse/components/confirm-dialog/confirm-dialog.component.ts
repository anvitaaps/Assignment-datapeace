import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'fuse-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class FuseConfirmDialogComponent
{
    public confirmMessage: string;
    type = '0';
    show: boolean = true;   //flag true for settings and false for schedule

    constructor(public dialogRef: MatDialogRef<FuseConfirmDialogComponent>)
    {
    }

}
