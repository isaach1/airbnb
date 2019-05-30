import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models/rental.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public rentals: Array<Rental> = [];
  
  constructor(private navCtrl: NavController) {
    let rental1 = new Rental();
    rental1.image = "https://i.boring.host/166LQ8hw.jpg";
    rental1.house_address = "21 Boring Avenue, New York, NY, 01111";
    rental1.price = 350;
    rental1.owner = "Joe Bloggs";
    this.rentals.push(rental1);

    let rental2 = new Rental();
    rental2.image = "https://i.boring.host/166MzJHl.jpg";
    rental2.house_address = "56 Goldsmith Street, Boston, MA, 02133";
    rental2.price = 200;
    rental2.owner = "Anthony Fuggle";
    this.rentals.push(rental2);
  }

  goToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  goRental1() {
    this.navCtrl.navigateForward('rental-details');
  }

  goRental2() {
    this.navCtrl.navigateForward('rental-details2');
  }
}
