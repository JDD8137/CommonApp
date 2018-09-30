import firebase from 'react-native-firebase';

export class Authenticator {

    static login(email, password) {
        return new Promise(function(resolve, reject) {
           firebase.auth().signInWithEmailAndPassword(email, password)
           .then(() => {
              resolve();
           })
           .catch(() => {
              reject();
           })
        });

    }

    static logout() {
        return new Promise(function(resolve, reject) {
            firebase.auth().signOut().then(() => {
                resolve();
            })
            .catch((error) => {
                reject(error);
            })
        })
    }

    static userIsLoggedIn(result) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            result(true);
          } else {
            result(false);
          }
        });
    }

    static forgotPassword(email) {
        return new Promise(function(resolve, reject) {
            firebase.auth().sendPasswordResetEmail(email).then(() => {
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
        })
    }

    static register(email, password, result) {
        return new Promise(function(resolve, reject) {
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject();
                });
        });

    }
}
