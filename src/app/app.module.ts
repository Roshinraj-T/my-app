import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './sample/sample.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { LearnserviceComponent } from './learnservice/learnservice.component';
import { ServiceService } from "./service.service";
import {  ServiceTestService} from "./service-test.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    FooterComponent,
    ServicesComponent,
    LearnserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService,ServiceTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
