import { Injectable } from '@angular/core';
import { Compte } from '../Compte';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ContactAccessService {


  constructor( private firestore: AngularFirestore) { }

  compteRef:AngularFirestore;

  // Get Compte
  getCompte(id: string) {
    return this.firestore.doc('/Compte/'+id).valueChanges();
  }

  getContact(id: string) {
    return this.firestore.doc('/Contact/'+id).valueChanges();
  }

  getAllCompte() {
    return this.firestore.collection('/Compte/').snapshotChanges();
  }

  getAllContact() {
    return this.firestore.collection('/Contact/').snapshotChanges();
  }
  getPersonalContact(id1 : String,id2: string){
    return this.firestore.doc("/Compte/"+id1).collection("/Contact").doc(id2).valueChanges();
  }
  getAllPersonalContact(id){
    return this.firestore.doc("/Compte/"+id).collection("/Contact").snapshotChanges();
  }
  newCompte(compte :Compte){
    return this.firestore.collection('/Compte').doc(compte.email).set(compte);
  }

  newContact(contact){
    return this.firestore.collection('/Contact/').doc(contact.tel).set(contact);
  }

  newPersonalContact(id,contact){
    return this.firestore.doc('/Compte/'+id).collection('/Contact/').doc(contact.email).set(contact);
  }
  
}
