import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page1Service } from './page1/page1.service';
import { Page2Component } from './page2/page2.component';
import { Page404Component } from './page404/page404.component';
import { Page3Component } from './page3/page3.component';
import { Page31Component } from './page31/page31.component';
import { Page32Component } from './page32/page32.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page404Component,
    Page3Component,
    Page31Component,
    Page32Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [Page1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
