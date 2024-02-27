import { Component } from '@angular/core';

import { products as initProducts} from '../products';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = initProducts.filter( product => product.category_id === categoryIdFromRoute)
  }


  onDelete(id: number){
    this.products = this.products.filter(product => product.id !== id)
  }

  onLikePress(id: number){
    var product = this.products.find(product => product.id === id)
    if (product == undefined){
      alert("Something when wrong")
    }else{
      product.likeCount = (product?.likeCount ?? 0) + 1
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/