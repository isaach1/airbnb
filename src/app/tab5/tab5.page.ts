import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { PaymentType } from '../models/payment-type.model';
import { User } from '../models/user.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  // public payments: Array<PaymentType> = [];
  // public users: Array<User> = [];
  public user: User = new User();

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        console.log(parameters.get("user_id"));

        const user_id = localStorage.getItem("user_id");
        this.httpClient
          .get("http://localhost:3000/users/" + user_id)
          .subscribe(
            (response: User) => {
              console.log(response);
              this.user.firstname = response[0].firstname;
              this.user.lastname = response[0].lastname;
              this.user.email = response[0].email;
            }
          );
      }
    );
    
  }

  goToHome() {
    this.navCtrl.navigateForward('');
  }

}
