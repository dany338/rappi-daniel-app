import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { provideRoutes } from '@angular/router';
const APP_ROUTES = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  }
];

export const APP_ROUTES_PROVIDER = [
  provideRoutes(APP_ROUTES)
];