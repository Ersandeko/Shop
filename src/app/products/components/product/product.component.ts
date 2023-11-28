import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
   @Input() data:any;
   @Output() items = new EventEmitter();
  ngOnInit(): void {
  }

  showAdd:boolean = true;
  amount:number = 0;
  addTo(){
    this.showAdd = false ;
  }

  add(){
    this.items.emit({item:this.data, quantity: this.amount});
    this.showAdd = true;

  }

}
