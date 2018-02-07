import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
