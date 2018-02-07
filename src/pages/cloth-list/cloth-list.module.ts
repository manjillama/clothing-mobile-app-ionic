import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClothListPage } from './cloth-list';

@NgModule({
  declarations: [
    ClothListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClothListPage),
  ],
})
export class ClothListPageModule {}
