import { User } from '../user';
import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



// 需要配置到app.module.ts中
@Injectable()
export class Page1Service {

  constructor() { }
// 此方法只适用与获取mock数据
//  getUserList(): User[] {
//    return USERS;
//  }

  // 当访问服务端时，需要等待服务响应。而当服务等待时，浏览器不会阻塞。
  getUserList(): Observable<User[]> {
    return of(USERS);
  }
}
