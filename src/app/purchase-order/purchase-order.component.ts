import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseOrderService } from '../service/purchase-order.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService],
})
export class PurchaseOrderComponent implements OnInit {
  @ViewChild('form', { static: false }) public form: NgForm;

  constructor() {}

  ngOnInit(): void {}

  public finishOrder(): void {}
}
