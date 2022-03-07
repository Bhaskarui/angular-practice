import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList:any;
searchKey:string = '';
filterCategory:any;

  constructor(private apiService:ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    this.apiService.getProduct().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((ele:any)=>{
        if(ele.category ==="men's clothing" || ele.category==="women's clothing"){
          ele.category = "fashion"
        }
        Object.assign(ele,{quantity:1,total:ele.price})
      })
      console.log(this.productList);
    })
    this.cartService.search.subscribe(val=>{
      this.searchKey = val;
    })
  }

  addCart(item:any){
    this.cartService.addCart(item)
  }

  filter(category:string){
    console.log(category);
    this.filterCategory = this.productList.filter((result:any)=>{
      if(result.category ===category || category===''){
        return result;
      }
    })
  }

}
