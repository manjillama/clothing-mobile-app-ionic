import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerUrlProvider} from '../../providers/server-url/server-url';
import {FetchApiProvider} from '../../providers/fetch-api/fetch-api';
import { ItemViewPage } from '../item-view/item-view';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the StoreinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storeinfo',
  templateUrl: 'storeinfo.html',
})
export class StoreinfoPage {
  // Show loading icon when api is being fetched
  apiLoader:boolean = true;
  customErrorMsg:boolean = false;

  storeInfo:any;
  server_url:any;
  storeId:string;
  //list
  clothes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private serverUrl: ServerUrlProvider, private fetchApiProvider:FetchApiProvider,
    private callNumber:CallNumber) {
    this.storeInfo=navParams.get('storeInfo');
    this.storeId = navParams.get('storeId');
    this.server_url = serverUrl.url;
    this.getStoresClothes();
  }
  ionViewWillEnter() {
  }
  getStoresClothes(){
    this.fetchApiProvider.getStoreCloths(this.storeId)
          .subscribe(fetchedApi => {
            this.clothes = fetchedApi;
            //console.log(this.clothes);
            this.apiLoader = false;
            this.customErrorMsg = false;
          }, err => {
            //console.log("Okay error while fetching data");
            this.apiLoader = false;
            this.customErrorMsg = true;
          });
  }
  itemClick(itemInfo){
    this.navCtrl.push(ItemViewPage,itemInfo);
    //console.log(itemInfo);
  }
  callPhone(phoneNumber){
    this.callNumber.callNumber(phoneNumber, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer',phoneNumber));
  }
  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);
    this.getStoresClothes();
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
