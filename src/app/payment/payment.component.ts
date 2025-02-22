import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  processPayment() {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      alert('Payment successful!');
    } else {
      alert('Payment failed. Please try again.');
    }
  }
}