import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ServerUrlProvider} from '../server-url/server-url';

/*
  Generated class for the FetchApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FetchApiProvider {
  server_url:string;
  constructor(public http: Http,private serverUrl: ServerUrlProvider) {
    this.server_url = serverUrl.url;
  }
  getApi(category, gender, pageNumber){
    return this.http.get(this.server_url+'/'+gender+'/pageable/'+category+'/api?page='+pageNumber)
      .map(res => res.json());
  }
  getStores(){
    return this.http.get(this.server_url+'/stores/api')
      .map(res => res.json());
  }
  getStoreCloths(id){
    return this.http.get(this.server_url+'/stores/cloths/api/'+id)
      .map(res => res.json());
  }

  getSearchedItems(query, page){
    return this.http.get(this.server_url+'/search/api/'+query+'?page='+page)
      .map(res => res.json());
  }
}
