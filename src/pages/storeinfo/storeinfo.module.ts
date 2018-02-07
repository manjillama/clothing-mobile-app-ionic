import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreinfoPage } from './storeinfo';

@NgModule({
  declarations: [
    StoreinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreinfoPage),
  ],
})
export class StoreinfoPageModule {}
