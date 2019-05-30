import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../models';
import { AlertController, NavController } from '@ionic/angular';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  private rentalId: number;
  public nameOfRental: string;
  public currentRental: Rental;

  public rentals: Array<Rental> = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private navCtrl: NavController,
    private rentalService: RentalService
  ) {
    
   }

  ngOnInit() {
    // let receivedQueryParams = function(data: any) {
    //   console.log(data);
    // }
    
    let arrow = async (data: any) => {
      this.nameOfRental = data.params.rentalName;
      this.rentalId = data.params.rentalId;

      this.currentRental = 
        this.rentalService.findRentalById(this.rentalId);


      if (!this.currentRental) {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Warning',
          message: 'This page does not exist',
          buttons: ['OK']
        });
    
        await alert.present();

        this.navigateBack();
      }
    }
    
    this.activatedRoute.queryParamMap.subscribe(
      // receivedQueryParams
      arrow
    );
  }

  navigateBack () {
    this.navCtrl.navigateForward('tabs');
  }

}
