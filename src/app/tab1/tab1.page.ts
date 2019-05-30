import { Component } from '@angular/core';
import { Rental } from '../models';
import { NavController } from '@ionic/angular';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public rentals: Array<Rental> = [];
  
  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService
    ) {
    this.rentalService.getAllRentals();
    this.rentals = this.rentalService.rentals;
    
    }

  goToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  goRental(rental: Rental) {
    this.navCtrl.navigateForward('rental-details', {
      queryParams: {
        q: "ionic",
        rentalName: rental.name,
        rentalId: rental.id
      }
    });
  }

}
