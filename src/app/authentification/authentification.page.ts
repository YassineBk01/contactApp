import { Component, OnInit } from '@angular/core';
import { ContactAuthService } from '../services/contact-auth.service';
import { ContactAccessService }  from '../services/contact-access.service';
import { ReactiveFormsModule, FormsModule, Validators, FormBuilder, FormGroup ,FormControl  } from '@angular/forms';

import { MenuController, NavController } from '@ionic/angular';
import { Compte } from '../Compte';

@Component({
  selector: 'app-athentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  private authForm: FormGroup;
  constructor(private fireauth :ContactAuthService, private formBuilder: FormBuilder,
    private navCtrl: NavController, private menuCtrl : MenuController) { 
      this.menuCtrl.enable(true);
    }

  ngOnInit() {
    this.authForm = this.formBuilder.group ({
      email : [''],
      password: [''],
    })
  }

  singIn(){
    this.fireauth.singIn(this.authForm.value)
    .then (res => {
    console. log (res);
    this.navCtrl.navigateForward('/liste-contacts');
    }, err => {
    console. log(err);
    })
  }
  singUp(){
    this.navCtrl.navigateForward('/inscription');
  }


}
