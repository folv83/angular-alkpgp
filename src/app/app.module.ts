import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CdkAccordionModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
