import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  searchInput: FormControl;
  radio_buttons: any;
  tableData: any;
  temp: any;
  allData: any;
  radioOptions: string = 'all'; 
  loadingIndicator: any = 'false';
  storeEvent;
  storeSearch;
  downloadExcelData = [];
  pdf_data = [];
  public statusList = {admin:true,manager:true,operator:true,line_manager:true,pd:true};
  token;
  downloadTypeValue = '';
  loginId;
  orgName;

  constructor( private router: Router,
              private user_service: UsersService) { 
    this.loadingIndicator = false;
    this.searchInput = new FormControl('');
    this.get_list();
  }

  ngOnInit() {
    this.radio_buttons = [{name: 'All', value: 'all'},{name: 'Active', value: 'Active'},{name: 'Inactive', value: 'Inactive'}];
  }

  //Get roles list
  get_list() {
    this.user_service.get_users_list().subscribe(
      (data) => {
        console.log('User list: ', data);
        this.tableData = data;
        this.allData = data;
      },error => {
      });
  }

  updateFilter(event) {
    
    this.storeSearch = event;
    this.temp = [];
    if (event) {
    const val = event.target.value.toLowerCase();
    if ( val !== '' ) {
      for (var i=0; i<this.tableData.length; i++) {
        
        if (this.tableData[i].first_name.toLowerCase().includes(val)) {
          this.temp.push(this.tableData[i]);
        }
      }
      this.tableData = this.temp;
      }
      else {
        this.tableData = this.allData;
      }
    }
  }

  viewItem(item) {
    console.log(item)
    let data = item;
    this.router.navigate(['apps/users/user-details/'+ item.id, {name: data.first_name + ' ' +data.last_name, company: data.company_name, city: data.city, state: data.state, zip: data.zip, email: data.email, web: data.web, age: data.age }]);
  }

}
