import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id;
  company;
  name;
  state;
  age;
  city;
  zip;
  web;
  email;
  sub;

  constructor(private router:Router,
              private route: ActivatedRoute,
              private user_service: UsersService,
              private location: Location) { 
                this.route.params.subscribe(params => {
                  console.log(params) //log the entire params object
                  this.company = params.company;
                  this.name = params.name;
                  this.state = params.state;
                  this.city = params.city;
                  this.zip = params.zip;
                  this.web = params.web;
                  this.email = params.email;
                });
                this.sub = this.route
      .data
      .subscribe(v => console.log(v));
                this.location.replaceState(this.location.path().split(';')[0], '');
            }

  ngOnInit() {
   
  }

  back() {
    this.router.navigate(['apps/users'])
  }

}
