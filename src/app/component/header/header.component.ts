import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number = 0;
  searchTerm='';
  constructor(private cartService: CartService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.SpinnerService.show(); 
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
    this.SpinnerService.hide();
  }

  reset(){
    this.searchTerm = '';
    
  }

}
