import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactAuthService } from '../services/contact-auth.service';


@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.page.html',
  styleUrls: ['./deconnexion.page.scss'],
})
export class DeconnexionPage implements OnInit {

  constructor(private fireAuth : ContactAuthService , private navCtrl : NavController) { }

  ngOnInit() {
  }

  singOut () {
    this.fireAuth.singOut()
    .then(res => {
      console.log("disconnected");
      this.navCtrl.navigateRoot('/authentification');
      console.log(res);

    }, err => {
      console.log(err);
    })
  }

}
