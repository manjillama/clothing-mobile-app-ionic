import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FetchApiProvider} from '../../providers/fetch-api/fetch-api';
import {ServerUrlProvider} from '../../providers/server-url/server-url';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchQuery: string;
  searched:boolean = false;

  //Default page one
  pageNumber:number=1;
  //list of products
  clothes:any=[];
  // Show loading icon when api is being fetched
  apiLoader:boolean = false;
  customErrorMsg:boolean = false;
  listFetchStatus:boolean = false;
  server_url:string;
  constructor(public navCtrl: NavController,
    private fetchApiProvider: FetchApiProvider,
    private serverUrl: ServerUrlProvider) {
    this.server_url = serverUrl.url;
  }
  search(event){
    if(this.searchQuery != ''){
      this.apiLoader = true;
      //console.log(this.searchQuery);
      // Resetting page
      this.pageNumber=1;
      this.clothes = [];
      this.listFetchStatus = false;

      this.searched = true;
      this.fetchAllClothes();
    }
  }

  fetchAllClothes(){
    this.fetchApiProvider.getSearchedItems(this.searchQuery, this.pageNumber)
          .subscribe(fetchedApi => {
            //console.log(fetchedApi);
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

  doInfinite(infiniteScroll) {
    this.pageNumber++;
    //console.log('Begin async operation', 'Page: '+this.pageNumber);
    this.fetchAllClothes();
    setTimeout(() => {
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
