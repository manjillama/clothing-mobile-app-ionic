import { Injectable } from '@angular/core';

/*
  Generated class for the ServerUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerUrlProvider {
  url;
  constructor() {
    // Change this global server variable

    //http://10.0.2.2:8090
    this.url="http://labim.vortexnepal.com";
    //http://labim.vortexnepal.com/
    // http://localhost:8090
  }

}
