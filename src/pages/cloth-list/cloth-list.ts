import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemViewPage } from '../item-view/item-view';
import { FetchApiProvider} from '../../providers/fetch-api/fetch-api';
import {ServerUrlProvider} from '../../providers/server-url/server-url';

/**
 * Generated class for the ClothListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cloth-list',
  templateUrl: 'cloth-list.html',
})
export class ClothListPage {
  // Show loading icon when api is being fetched
  apiLoader:boolean = true;
  customErrorMsg:boolean = false;
  listFetchStatus:boolean = false;

  server_url:string;
  category:string;
  gender:string;
  searchQuery:string;
  //list of products
  clothes:any=[];
  //Default page one
  pageNumber:number=1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fetchApiProvider: FetchApiProvider, private serverUrl: ServerUrlProvider) {

    // Capitalizing just the first letter
    let toBeUppercase=navParams.get('category');
    this.category = toBeUppercase.charAt(0).toUpperCase() + toBeUppercase.slice(1);

    this.gender=navParams.get('gender');
    this.server_url = serverUrl.url;

    // When search is used
    this.searchQuery=navParams.get('query');
    this.fetchAllClothes();
  }

  ionViewWillEnter(){
    //console.log("Will Enter Triggered");
  }
  fetchAllClothes(){
    this.fetchApiProvider.getApi(this.category, this.gender, this.pageNumber)
          .subscribe(fetchedApi => {

            //If no item is fetched
            if(fetchedApi.length==0){
              this.listFetchStatus = true;
            }else{
              for(let i=0;i<fetchedApi.length;i++){
                this.clothes.push(fetchedApi[i]);
              }
            }
            //console.log(this.clothes)
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

  doInfinite(infiniteScroll) {
    this.pageNumber++;
    //console.log('Begin async operation', 'Page: '+this.pageNumber);
    this.fetchAllClothes();
    setTimeout(() => {
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  doRefresh(refresher) {
    // Resetting page
    this.pageNumber=1;
    this.clothes = [];
    this.listFetchStatus = false;
    //console.log('Begin async operation', refresher);
    this.fetchAllClothes();
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
