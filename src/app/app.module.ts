import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { IssuesComponent } from './component/issues/issues.component';
import { AppService } from './service/app.service';
import { FooterComponent } from './component/footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
