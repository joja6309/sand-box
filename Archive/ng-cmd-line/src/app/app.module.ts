import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {NodeService} from './node.service';
import {GraphService} from './graph.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NodeService,GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
