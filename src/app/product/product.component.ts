import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product> = new Array<Product>();
  private productToCreate:Product;
  //products: Array<Product> = new Array<Product>();
  constructor(private http:Http) { 
    this.productToCreate = new Product();
  }

  ngOnInit() {
  }

  public saveProduct()
  {
    this.http
    .get("http://localhost/rappi-daniel-app/server/data.php")
    .subscribe((response)=>{
      this.products = response.json().products;
      this.products[this.products.length] = this.productToCreate;
      console.log(this.products);
      let tableProducts = document.getElementById("list-products-table");
      tableProducts.style.visibility = "visible";
    });
      
  }

}
