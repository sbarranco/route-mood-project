import * as firebase from 'firebase';

let db;

export default class DatabaseApi {

  static initDatabase() {
    var config = {
      apiKey: 'AIzaSyAir5-gnuoZvJVNJoGfZUkh02bkFXHdFjE',
      authDomain: 'my-project-1545145830346.firebaseapp.com',
      databaseURL: 'https://my-project-1545145830346.firebaseio.com',
      projectId: 'my-project-1545145830346',
      storageBucket: 'my-project-1545145830346.appspot.com',
      messagingSenderId: '158514110215'
    };

    firebase.initializeApp(config);

    db = firebase.firestore();

    db.settings({
      timestampsInSnapshots: true
    });
  }


  static async updateDocument(collectionName, document, id){
    let success = true;
    
    try {
      await db.collection(collectionName).doc(id).set(document, { merge: true });
    } catch (error) {
      success = false;
      // eslint-disable-next-line no-console
      console.log('​DatabaseApi -> updateDocument -> error', error);
    }

    return success;
  }

  static async addDocument(collectionName, document){
    let success = false;
    
    try {
      const docRef = await db.collection(collectionName).add(document);
      if(docRef.id) {
        // eslint-disable-next-line no-console
        console.log('​DatabaseApi -> addDocument -> docRef.id', docRef.id);
        success = true;
      }
      
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('​DatabaseApi -> }catch -> error', error);
    }

    return success;
  }

  static async getRealtimeDocument(collectionName, filterName, filterValue, callback){
    db.collection(collectionName).where(filterName, '==', filterValue)
      .onSnapshot((querySnapshot) => {
        let result = null;
        querySnapshot.forEach((doc) => {
          result = doc.data();
          result.id = doc.id;
        });
        callback(result);
      });
  }

  static async getDocument(collectionName, filterName, filterValue){
    const collectionRef = db.collection(collectionName);
    const query = collectionRef.where(filterName, '==', filterValue);
    let result = null;

    const querySnapshot = await query.get();
    querySnapshot.forEach((doc) => {
      result = doc.data();
      result.id = doc.id;
    });

    return result;
  }

  static async getCollection(collectionName) {
    const result = [];

    try {
      const querySnapshot = await db.collection(collectionName).get();
      querySnapshot.forEach((doc) => {
        const databaseObject = doc.data();
        databaseObject.id = doc.id;
        result.push(databaseObject);
      });

    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('​DatabaseApi -> catch -> error', error);
    }

    return result;
  }
}