import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 配置一个路由数组
const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: '/page1', component: Page1Component },
  { path: '/page2/:id1/:id2', component: Page2Component },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})

// 对外暴漏出去
export class appRoutingModule { }
