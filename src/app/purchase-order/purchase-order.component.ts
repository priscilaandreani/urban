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

  //controles de validação
  public validAddress: boolean;
  public validNumber: boolean;
  public validComplement: boolean;
  public validPaymentMethod: boolean;

  //estados primitivos dos campos (pristine)
  public pristineStateAddress: boolean = true;
  public pristineStateNumber: boolean = true;
  public pristineStateComplement: boolean = true;
  public pristineStatePaymentMethod: boolean = true;

  //controlar o botão de confirmar compra
  public canFinish: string = 'disabled';

  constructor() {}
  ngOnInit(): void {}

  public updateAddress(address: string): void {
    this.address = address;
    this.pristineStateAddress = false;

    if (this.address.trim().length > 3) {
      this.validAddress = true;
    } else {
      this.validAddress = false;
    }
    this.enableForm();
  }

  public updateNumber(number: string): void {
    this.number = number;

    this.pristineStateNumber = false;

    if (this.number.length > 0 && Number(this.number) >= 1) {
      this.validNumber = true;
    } else {
      this.validNumber = false;
    }
    this.enableForm();
  }

  public updateComplement(complement: string): void {
    this.complement = complement;
    this.pristineStateComplement = false;

    if (this.complement.trim().length > 0) {
      this.validComplement = true;
    }
  }

  public updatePaymentMethod(method: string): void {
    this.paymentMethod = method;
    this.pristineStatePaymentMethod = false;

    if (this.paymentMethod.length > 0) {
      this.validPaymentMethod = true;
    } else {
      this.validPaymentMethod = false;
    }
    this.enableForm();
  }

  public enableForm(): void {
    if (
      this.validAddress == true &&
      this.validNumber == true &&
      this.validPaymentMethod == true
    ) {
      this.canFinish = '';
    } else {
      this.canFinish = 'disable';
    }
  }
}
