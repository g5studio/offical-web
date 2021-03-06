import { filter, map, take, switchMap } from 'rxjs/operators';
import { Subject, ReplaySubject, of, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private $firebaseStore: AngularFirestore,
    private $firebaseAuth: AngularFireAuth
  ) {
  }

  public addCollectionListener(name: string, fun: any) {
    return this.$firebaseStore.collection(name).snapshotChanges().subscribe(
      res => fun(res.map(_ => _.payload.doc.data()))
    );
  }

  public removeCollectionListener(listenter: Subscription) {
    listenter.unsubscribe();
  }

  public collection(name: string) {
    const errorHandler = (error) => {
      throw error;
    };
    return {
      create: (data: any) => this.$firebaseStore
        .collection(name)
        .add(data)
        .catch(error => errorHandler(error)),
      read$: this.$firebaseStore.collection(name).snapshotChanges().pipe(
        take(1),
        map(res => res.map(item => ({ id: item.payload.doc.id, data: item.payload.doc.data() })))
      ),
      update: (id: string, data: any) => this.$firebaseStore
        .collection(name)
        .doc(id)
        .update(data)
        .catch(error => errorHandler(error)),
      delete: (id: string) => this.$firebaseStore
        .collection(name)
        .doc(id)
        .delete()
        .catch(error => errorHandler(error))
    };
  }

  public document(name: string, id: string) {
    const doc = this.$firebaseStore.collection(name).doc(id);
    return {
      set: (data: any) => doc.set(data, { merge: true }),
      get: () => doc.get()
    };
  }
}
