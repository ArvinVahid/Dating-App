import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../_services/account.service';
import {error} from 'protractor';
import {User} from '../_models/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
  }
}