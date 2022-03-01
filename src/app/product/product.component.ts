import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
title="New design products will come soon!!";
isDisabled: boolean = true;
count =0;
value1 ='';
value3 = '';
value4 = '';
name=''
  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){
    this.count++;
  }

  value=""
handleInput(event:any) {
  this.value = (event.target as HTMLInputElement).value;
}

val="";
handleInput1(element:any) {
  this.val=element.value;
}
search='';
clearValue(){
  this.search = '';
}
}
