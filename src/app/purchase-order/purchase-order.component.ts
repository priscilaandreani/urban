import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrderService } from '../service/purchase-order.service';
import { Order } from '../shared/order.model';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService],
})
export class PurchaseOrderComponent implements OnInit {
  public idPurchaseOrder: number;
  public form: FormGroup = new FormGroup({
    address: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    number: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(8),
    ]),
    complement: new FormControl(null),
    paymentMethod: new FormControl(null, [Validators.required]),
  });

  constructor(private purchaseOrderService: PurchaseOrderService) {}

  ngOnInit(): void {}

  public finishOrder(): void {
    let order: Order = new Order(
      this.form.value.address,
      this.form.value.number,
      this.form.value.complement,
      this.form.value.paymentMethod
    );

    console.log(order);
    this.purchaseOrderService
      .makePurchase(order)
      .subscribe(
        (idPurchaseOrder: number) => (this.idPurchaseOrder = idPurchaseOrder)
      );
  }
}
