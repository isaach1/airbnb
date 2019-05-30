import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models/rental.model';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
