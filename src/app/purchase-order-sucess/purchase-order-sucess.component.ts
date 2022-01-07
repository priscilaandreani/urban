import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order-sucess',
  templateUrl: './purchase-order-sucess.component.html',
  styleUrls: ['./purchase-order-sucess.component.css'],
})
export class PurchaseOrderSucessComponent implements OnInit {
  @Input() public idOrderPurchase: number;
  constructor() {}

  ngOnInit(): void {}
}
