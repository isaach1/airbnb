import { Component, OnInit } from '@angular/core';
import { Rental } from '../models';
import { NavController } from '@ionic/angular';
import { RentalService } from '../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public rentals: Array<Rental> = [];
  public user_id: number;
  
  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
    ) {
    // this.rentalService.getAllRentals();
    // this.rentals = this.rentalService.rentals;
    
    }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:3000/properties")
      .subscribe(
        (response: any) => {
          console.log(response);
          this.rentals = response;
        }
      );
  }
  
    goToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  goRental(rental: Rental) {
    // console.log(rental);
    this.navCtrl.navigateForward('rental-details', {
      queryParams: {
        q: "ionic",
        rentalName: rental.name,
        rentalId: rental.id
      }
    });
  }

}
