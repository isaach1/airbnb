import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../models';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  public nameOfRental: string;
  public rentalId: number;
  public userId: number;
  public currentRental: Rental;
  public dateFrom: Date;
  public dateTo: Date;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) {
    
   }

  ngOnInit() {
    // let receivedQueryParams = function(data: any) {
    //   console.log(data);
    // }
    
    let arrow = async (data: any) => {
      this.nameOfRental = data.params.rentalName;
      const id = data.params.rentalId;
      this.rentalId = id;
      this.userId = localStorage.user_id;

      this.httpClient
        .get("http://localhost:3000/properties/" + id)
        .subscribe(
          async (response: any) => {
            console.log(response[0]);
            this.currentRental = response[0];  
            console.log(this.currentRental);

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
        )

      // if (!this.currentRental) {
      //   const alert = await this.alertController.create({
      //     header: 'Alert',
      //     subHeader: 'Warning',
      //     message: 'This page does not exist',
      //     buttons: ['OK']
      //   });
    
      //   await alert.present();

      //   this.navigateBack();
      // }
    }
    
    this.activatedRoute.queryParamMap.subscribe(
      // receivedQueryParams
      arrow
    );
  }

  navigateBack() {
    this.navCtrl.navigateForward('tabs');
  }

  sendBooking() {
    var property = {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      userId: this.userId,
      status: "NEW"
    };
    
    this.httpClient
      .post("http://localhost:3000/properties/" + this.rentalId + "/bookings", property)
      .subscribe(
        async (response) => {
          console.log(response);
          const alert = await this.alertController.create({
              header: 'Success',
              subHeader: 'Congratulations',
              message: 'Your booking has been recorded',
              buttons: ['OK']
            });
        
          await alert.present();
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
