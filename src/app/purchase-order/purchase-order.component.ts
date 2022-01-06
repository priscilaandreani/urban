import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
})
export class PurchaseOrderComponent implements OnInit {
  public address: string = '';
  public complement: string = '';
  public number: string = '';
  public paymentMethod: string = '';

  constructor() {}

  public updateAddress(address: string): void {
    this.address = address;
    console.log(this.address);
  }

  public updateNumber(number: string): void {
    this.number = number;
    console.log(this.number);
  }

  public updateComplement(complement: string): void {
    this.complement = complement;
    console.log(this.complement);
  }

  public updatePaymentMethod(method: string): void {
    this.paymentMethod = method;
    console.log(this.paymentMethod);
  }

  ngOnInit(): void {}
}
