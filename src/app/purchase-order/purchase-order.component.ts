import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseOrderService } from '../service/purchase-order.service';
import { Order } from '../shared/order.model';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService],
})
export class PurchaseOrderComponent implements OnInit {
  @ViewChild('form', { static: false })
  public form: NgForm;

  public idPurchaseOrder: number;

  constructor(private purchaseOrderService: PurchaseOrderService) {}

  ngOnInit(): void {}

  public finishOrder(): void {
    let order: Order = new Order(
      this.form.value.address,
      this.form.value.number,
      this.form.value.complement,
      this.form.value.paymentMethod
    );
    this.purchaseOrderService
      .makePurchase(order)
      .subscribe(
        (idPurchaseOrder: number) => (this.idPurchaseOrder = idPurchaseOrder)
      );
  }
}
