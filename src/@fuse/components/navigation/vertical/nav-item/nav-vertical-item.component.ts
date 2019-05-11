import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'fuse-nav-vertical-item',
    templateUrl: './nav-vertical-item.component.html',
    styleUrls  : ['./nav-vertical-item.component.scss']
})
export class FuseNavVerticalItemComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;
    // roleId = JSON.parse(localStorage.getItem('login_user_role_id'));
    
    constructor()
    {
        
    }

    ngOnInit() {
    //     if (this.roleId != null)
    //         this.item.show = this.item.roleId.some(r=> this.roleId.includes(r));
      }
}
