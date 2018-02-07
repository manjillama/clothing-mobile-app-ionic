import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { CallNumber } from '@ionic-native/call-number';

import { StoreinfoPage } from '../pages/storeinfo/storeinfo';
import { SearchPage } from '../pages/search/search';
import { CategoryPage } from '../pages/category/category';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClothListPage } from '../pages/cloth-list/cloth-list';
import { ItemViewPage } from '../pages/item-view/item-view';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FetchApiProvider } from '../providers/fetch-api/fetch-api';
import { ServerUrlProvider } from '../providers/server-url/server-url';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    CategoryPage,
    HomePage,
    TabsPage,
    StoreinfoPage,
    ClothListPage,
    ItemViewPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    CategoryPage,
    HomePage,
    TabsPage,
    StoreinfoPage,
    ClothListPage,
    ItemViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FetchApiProvider,
    ServerUrlProvider,
    CallNumber,
  ]
})
export class AppModule {}
