import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemViewPage } from './item-view';

@NgModule({
  declarations: [
    ItemViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemViewPage),
  ],
})
export class ItemViewPageModule {}
