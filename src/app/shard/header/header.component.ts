import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mycount :number = 0;
  constructor() { }
  prodFromStorage : any [] = []
  ngOnInit(): void {
    this.prodFromStorage = JSON.parse(localStorage.getItem("cart")!)
    this.mycount = this.prodFromStorage.length
  }



}
