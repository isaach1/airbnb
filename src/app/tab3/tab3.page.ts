import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private navCtrl: NavController) {}

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
