import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreinfoPage } from '../storeinfo/storeinfo';
import {ServerUrlProvider} from '../../providers/server-url/server-url';
import {FetchApiProvider} from '../../providers/fetch-api/fetch-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores:any;
  server_url:string;
  // UX handling i.e. errors
  // Show loading icon when api is being fetched
  apiLoader:boolean = true;
  customErrorMsg:boolean = false;

  constructor(public navCtrl: NavController, private serverUrl: ServerUrlProvider, private fetchApiProvider:FetchApiProvider) {
    this.server_url = serverUrl.url;
    this.fetchStores();
  }

  ionViewWillEnter(){
  }
  fetchStores(){
    this.fetchApiProvider.getStores()
          .subscribe(fetchedApi => {
            //console.log(fetchedApi)
            this.stores = fetchedApi;
            this.apiLoader = false;
            this.customErrorMsg = false;
          }, err => {
            //console.log("Okay error while fetching data");
            this.apiLoader = false;
            this.customErrorMsg = true;
          });
  }
  goToStore(storeInfo) {
    this.navCtrl.push(StoreinfoPage,{
      storeInfo:storeInfo,
      storeId:storeInfo.storeId,
    });
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);
    this.fetchStores();
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
