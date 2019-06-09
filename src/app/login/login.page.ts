import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public email: string =  "";
  public password: string = "";
  
  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController  
  ) { }

  ngOnInit() {
  }

  goToHome() {
    var user = {
      email: this.email,
      password: this.password
    };
    
    this.httpClient
      .post("http://localhost:3000/users/authentication", user)
      .subscribe(
        (response: any) => { 
          const userId = response.id;

          localStorage.setItem("user_id", userId);
          console.log(response.id);
          this.navCtrl.navigateForward('tabs');
        },
        async (err) => {
          console.log(err); 
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            subHeader: 'Incorrect username or password',
            message: err.message,
            buttons: ['OK']
          });

          await alert.present();
        }
      );

  }

  goToRegister() {
    this.navCtrl.navigateForward('register');
  }

}
