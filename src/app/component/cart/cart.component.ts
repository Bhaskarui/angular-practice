import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products: any=[];
public grandTotal !: number;
toDate:Date = new Date;
  constructor(private cartService:CartService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.SpinnerService.show()
    this.cartService.getProducts().subscribe((res:any)=>{
      this.products = res;
      console.log(this.products);
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(product:any) {
    this.cartService.removeCartItem(product);
  }

  emptyCart(){
    this.cartService.removeAll();
  }

}
