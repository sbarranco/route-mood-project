import * as firebase from 'firebase';

export default class StorageApi {
  static uploadFile(folder, file, callback){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${folder}/${+(new Date())}-${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      (snapshot) => {
        // // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case firebase.storage.TaskState.PAUSED: // or 'paused'
        //     console.log('Upload is paused');
        //     break;
        //   case firebase.storage.TaskState.RUNNING: // or 'running'
        //     console.log('Upload is running');
        //     break;
        // }
      },(error) => {

        // // A full list of error codes is available at
        // // https://firebase.google.com/docs/storage/web/handle-errors
        // switch (error.code) {
        //   case 'storage/unauthorized':
        //     // User doesn't have permission to access the object
        //     break;

        //   case 'storage/canceled':
        //     // User canceled the upload
        //     break;

        //   case 'storage/unknown':
        //     // Unknown error occurred, inspect error.serverResponse
        //     break;
      
      }, () => {
        console.log('Upload completed successfully');
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          callback(downloadURL);
        });
      });
  }
}

