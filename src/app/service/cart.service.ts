import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartList:any =[];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<any>('');
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  // setProduct(product:any){
  //   this.cartList.push(...product);
  //   this.productList.next(product);
  // }

  addCart(product:any){
    console.log(product)
    this.cartList.push(product);
    console.log(this.cartList);
    this.productList.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList);
  }

  getTotalPrice():number{
    let grandTotal=0;
    this.cartList.map((res:any)=>{
      grandTotal+=res.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartList.map((res:any, index:any)=>{
      if(product.id==res.id){
        this.cartList.splice(index,1);
      }
    });
    this.productList.next(this.cartList);
  }


removeAll(){
  this.cartList=[];
  this.productList.next(this.cartList);
}

}
