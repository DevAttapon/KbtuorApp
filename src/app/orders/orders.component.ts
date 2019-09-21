import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
declare var $: any;


@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() modalID: any;
  @Input() active: number;
  items: MenuItem[];
  activeStepIndex: any;
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.activeStepIndex = 0;
    $('#sec2').hide();
    $('#sec3').hide();

    this.items = [
      {label: 'รายละเอียดการซื้อ'},
      {label: 'ชำระเงิน'},
      {label: 'ยืนยัน'}
  ];
  }

  confirmOrder (): void {
        this.activeStepIndex =  1;
        $('#sec1').hide();
        $('#sec2').show();
        $('#sec3').hide();

  }

  onUpload(event) {
        this.uploadedFiles.push(event.file);
    }

}
