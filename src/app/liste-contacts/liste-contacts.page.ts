import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { ContactAccessService } from '../services/contact-access.service';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.page.html',
  styleUrls: ['./liste-contacts.page.scss'],
})
export class ListeContactsPage implements OnInit {
  contacts: Contact[];
  constructor(private contactservice:ContactAccessService) { }

  ngOnInit() {

   this.contactservice.getAllContact().subscribe(data => {

      this.contacts = data.map(e => {
        return {
          nom: e.payload.doc.data()['nom'],
          prenom: e.payload.doc.data()['prenom'],
          tel: e.payload.doc.data()['tel'],
          service: e.payload.doc.data()['service'],
          adresse: e.payload.doc.data()['adresse'],
          city: e.payload.doc.data()['city'],
          email: e.payload.doc.data()['email'],
        };
      })
      console.log(this.contacts);
    });
  }
}
