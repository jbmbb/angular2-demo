import { User } from '../user';
import { Page1Service } from './page1.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  private sub: any;
  private id: number;
  private name: string;
  private age: number;

  userList: User[];

  constructor(private _activatedRoute: ActivatedRoute, private page1service: Page1Service) { }

  //  getUsers(): void {
  //    this.userList = this.page1service.getUserList();
  //  }

  //  Observable.subscribe()
  getUsers(): void {
    this.page1service.getUserList().subscribe(users => this.userList = users);
  }


  ngOnInit() {
    this.sub = this._activatedRoute.queryParams.subscribe(queryParams => {
      console.log('queryParams参数:', queryParams);
      this.id = Number.parseInt(queryParams['id']);
      this.name = queryParams['name'];
      this.age = Number.parseInt(queryParams['age']);
    });

    this.getUsers();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
