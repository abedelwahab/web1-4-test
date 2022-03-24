import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() name:string=" "
  @Input() category:string=" "
  @Input() price:string=" "
  constructor() { }

  ngOnInit(): void {
   
}

}