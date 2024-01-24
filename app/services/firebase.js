import Service from '@ember/service';
import firebase from 'firebase/app';
import 'firebase/database';
export default class FirebaseService extends Service {
  async getEmployees() {
    const snapshot = await firebase.database().ref('employees').once('value');
    return snapshot.val();
  }
}
