import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
data: productInfo[]=[]
  constructor() { }

  ngOnInit(): void { 
    fetch('https://ancient-stream-88099.herokuapp.com/')
  .then(response => response.json())
  .then(json=>{
    json.forEach((x:any)=>{
      let p=new productInfo
      p.name=x.name
      p.category=x["category "]
      p.price=x.price
      this.data.push(p)
   })
  })
}
}

class productInfo{
  name:string=" "
 category:string=" "
 price:string=" "

}