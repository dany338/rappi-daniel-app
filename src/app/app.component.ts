import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductComponent } from './product/product.component';
//import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [ProductComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app rappid!';

  public categories: Array<Category> = new Array<Category>();
  public products: Array<Product> = new Array<Product>();

  constructor(private http:Http){
    //this.categories = [];
    //this.products = [];
  }

  listProducts(){
    this.http
    .get("http://localhost/rappi-daniel-app/server/data.php")
    .subscribe((response)=>{
      this.products = response.json().products;
      console.log(this.products);
      let tableProducts = document.getElementById("list-products-table");
      tableProducts.style.visibility = "visible";
    });
  }

  listCategories(){
    this.http
    .get("http://localhost/rappi-daniel-app/server/data.php")
    .subscribe((response)=>{
      this.categories = response.json().categories;
      console.log(this.categories);
      let tableCategories = document.getElementById("list-categories-table");
      tableCategories.style.visibility = "visible";
    });
  }

  addProduct() {
    let formProduct = document.getElementById("form-product");
    formProduct.style.display = "block";
  }
}
