import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  hourlyWorked;
  result;
  hourlyRate;
  pay : number
  overtimePay : number
  totalPay : number
  tax : number


  calculatePay() {
    if (this.hourlyWorked > 40)
    {
      this.pay  = 40 * this.hourlyRate
      this.overtimePay = (this.hourlyWorked - 40) * this.hourlyRate *1.5 
      this.totalPay = this.overtimePay+ this.pay  
    }
    else
    {
     this.pay = this.hourlyWorked * this.hourlyRate
     this.totalPay = this.pay
     this.overtimePay = 0.0
    }
    this.tax=  this.totalPay  * 0.18
  }
}
