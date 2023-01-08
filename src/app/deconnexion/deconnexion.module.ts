import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavComponentWithProps, NavController } from '@ionic/angular';

import { DeconnexionPageRoutingModule } from './deconnexion-routing.module';

import { DeconnexionPage } from './deconnexion.page';
import { ContactAuthService } from '../services/contact-auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeconnexionPageRoutingModule
  ],
  declarations: [DeconnexionPage]
})
export class DeconnexionPageModule {

  constructor(private fireauth:ContactAuthService, private navCtrl:NavController){}

  ngOnInit(){

  }
  
  singOut(){
    this.fireauth.singOut()
    .then(res => {
      this.navCtrl.navigateRoot("/authentification");
      console.log(res);
    },err=> {
      console.log(err);
    }
    )
  }
}
