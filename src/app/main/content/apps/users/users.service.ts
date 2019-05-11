import { Injectable } from '@angular/core';
import { FuseAppsModule } from '../apps.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = FuseAppsModule.API_ENDPOINT+'/users';

  constructor(private http: HttpClient,
              private router: Router) { 
  }

  get_users_list() :Observable<any>{
    return this.http.get(this.url, {
      headers: new HttpHeaders({'Content-Type': 'application/json',
    })
    })
    .map(
      (data) => data
    );
  }

  view_user(userId, token) :Observable<any>{
    console.log(userId, token)
    return this.http.get(this.url+'/'+userId, {
      headers: new HttpHeaders({'Content-Type': 'application/json',
      'Authorization' : token
    })
    })
    .map(
      (data) => data
    );
  }
}
