import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerUrlProvider} from '../../providers/server-url/server-url';

/**
 * Generated class for the ItemViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-view',
  templateUrl: 'item-view.html',
})
export class ItemViewPage {
  productName:string;
  price:string;
  desc:string;
  storeNo:string;
  productId:string;
  server_url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private serverUrl: ServerUrlProvider) {
    this.productName=navParams.get('productName');
    this.price=navParams.get('productPrice');
    this.desc=navParams.get('productDescription');
    this.storeNo=navParams.get('storeNo');
    this.productId=navParams.get('productId');
    //console.log(this.itemName);
    this.server_url = serverUrl.url;
  }

  ionViewDidLoad() {
  }

}
