import { Component, OnInit } from '@angular/core';
import { Compte } from '../Compte';
import { ContactAccessService } from '../services/contact-access.service';
 import { ContactAuthService } from '../services/contact-auth.service';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image: String; 

  compte: any={};
  email: string;

  constructor(private contactservice:ContactAccessService,
    private fireauth :ContactAuthService, 
    private navCtrl: NavController) { 

}

  ngOnInit() {
    this. fireauth.userDetails().subscribe(res => {
      console.log('res', res);
      if (res != null) {
      this.email = res.email;
      this.contactservice.getCompte(this.email).subscribe(res =>{
        this.compte = <Compte> res;
        console.log (res);
      })
      }else{
        this.navCtrl.navigateForward('/authentification');
      }}, err => {
        console. log('err', err);
        })

        
      
  }

}
