import * as firebase from 'firebase';

export default class AuthApi {

  static async logout() {
    let error = '';
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log('AuthApi -> signUp -> error', err);
      error = err.code;
    }
    return error;
  }

  static async signUp(email, password){
    let error = '';
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('AuthApi -> signUp -> error', err);
      error = err.code;
    }
    return error;
  }

  static async login(email, password){
    let error = '';
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('AuthApi -> login -> error', err);
      error = err.code;
    }
    return error;
  }

  static registerAuthObserver(callback){
    firebase.auth().onAuthStateChanged((user) => {
      callback(user);
    });
  }
}