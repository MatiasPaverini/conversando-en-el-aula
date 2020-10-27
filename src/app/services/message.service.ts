import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  public userArray;
  private collection = 'chat';

  public saveMessage(message) {
    return this.firestore.collection(this.collection).add(message);
  }

  public getMessages() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }
}
