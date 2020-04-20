import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {ModalModule} from "./_modal/modal.module";
import {TestPageComponent} from "./test-page/test-page.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModalModule, appRoutingModule],
  declarations: [AppComponent, HomeComponent, TestPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
