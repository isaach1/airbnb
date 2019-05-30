import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PaymentType } from '../models/payment-type.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public payments: Array<PaymentType> = [];
  public users: Array<User> = [];

  constructor(private navCtrl: NavController) {
    let payment1 = new PaymentType();
    payment1.payment_method = "MasterCard";
    payment1.card_number = "xxxx-xxxx-xxxx-1342";
    payment1.name_on_card = "John Smith";
    payment1.expiration_date = "08/20";
    payment1.security_code = "332";
    this.payments.push(payment1);

    let payment2 = new PaymentType();
    payment2.payment_method = "MasterCard";
    payment2.card_number = "xxxx-xxxx-xxxx-3931";
    payment2.name_on_card = "John R Smith";
    payment2.expiration_date = "10/22";
    payment2.security_code = "134";
    this.payments.push(payment2);

    let user1 = new User();
    user1.name = "Isaac";
    user1.image = "https://i.boring.host/1655Njr4.jpg";
    user1.join_date = 2019;
    user1.location = "London, UK";
    user1.email = "isaachudis1@gmail.com";
    user1.phone_number = "+447795241717";
    user1.bookings = 0;
    user1.reviews = 0;
    this.users.push(user1);
  }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateForward('');
  }

}
