import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';
import { CreatePage } from '../pages/create/create';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    EditPage,
    CreatePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    EditPage,
    CreatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
