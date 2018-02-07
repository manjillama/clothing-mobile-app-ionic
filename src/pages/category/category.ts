import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClothListPage } from '../cloth-list/cloth-list';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  gender = 'women';
  constructor(public navCtrl: NavController) {
  }

  // @params category name
  cateCloth(category,women){
    // @params gender, @params category
    this.navCtrl.push(ClothListPage,{
      category:category,
      gender:women
    });
  }
}
