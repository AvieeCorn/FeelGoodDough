import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import {MatCardModule} from '@angular/material/card';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    PageFooterComponent,
    MobileFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
