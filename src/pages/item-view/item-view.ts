import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServerUrlProvider} from '../../providers/server-url/server-url';
import {FetchApiProvider} from '../../providers/fetch-api/fetch-api';
import { PhotoViewer } from '@ionic-native/photo-viewer';
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
  productManufacturer:string;
  server_url:string;
  storeInfo:any;
  storeName:string;
  contactNo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private serverUrl: ServerUrlProvider, private fetchApiProvider:FetchApiProvider, private photoViewer: PhotoViewer) {
    this.productName=navParams.get('productName');
    this.price=navParams.get('productPrice');
    this.desc=navParams.get('productDescription');
    this.storeNo=navParams.get('storeNo');
    this.productId=navParams.get('productId');
    this.productManufacturer=navParams.get('productManufacturer');
    //console.log(this.itemName);
    this.server_url = serverUrl.url;


  }

  ionViewDidLoad() {
    // Get store by Id
    this.fetchApiProvider.getStoreInfo(this.storeNo)
    .subscribe(fetchedApi => {
      console.log(fetchedApi);
      this.contactNo = fetchedApi.storeContactNumber;
      this.storeName = fetchedApi.storeName;
    });
  }

  viewImage(){
    this.photoViewer.show(this.server_url+'/gp_product/images/'+this.productId+'.jpg');
  }

}
