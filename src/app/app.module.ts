import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TagModule } from 'primeng/tag';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { MessageService } from 'primeng/api';
import { CountdownModule } from 'ngx-countdown';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { RecieverComponent } from './reciever/reciever.component';

@NgModule({
  declarations: [AppComponent, ConnectionComponent, HomeComponent, RecieverComponent],
  imports: [
    ReactiveFormsModule,
    ProgressBarModule,
    TableModule,
    ChartModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TagModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    SliderModule,
    AccordionModule,
    MenubarModule,
    ToastModule,
    RippleModule,
    DialogModule,
    InputNumberModule,
    SidebarModule,
    CalendarModule,
    TabViewModule,
    CountdownModule,
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
