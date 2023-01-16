import { Component, OnInit } from '@angular/core';
import { ContactAuthService } from '../services/contact-auth.service';
import { ContactAccessService }  from '../services/contact-access.service';
import { ReactiveFormsModule,Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.page.html',
  styleUrls: ['./ajouter-contact.page.scss'],
})
export class AjouterContactPage implements OnInit {
  private ajouterContactForm : FormGroup;
  
  constructor(private fireauth : ContactAuthService, 
    private firestore : ContactAccessService,
    private formBuilder : FormBuilder,
    private navCtrl : NavController) {

      
     }

  ngOnInit() {
  }
  nouveauContact(){
    this.fireauth.userDetails().subscribe(res => {
    console.log('res', res);
    if (res !== null) {
    this.firestore.newPersonalContact(res.email,this.ajouterContactForm.value)
    this.navCtrl.navigateForward('/liste-contacts');
    } else {
    this.navCtrl.navigateForward('/authentification');
    }
    }, err => {
    console.log('err', err);
    })
    }
}
