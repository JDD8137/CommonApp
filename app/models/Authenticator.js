import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  AccessToken,
} = FBSDK;

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

    static loginWithFacebook() {
        return new Promise((resolve, reject) => {
          LoginManager.logInWithReadPermissions(['email'])
          .then(
            (result) => {
              if (result.isCancelled) {
                reject();
              } else {
                AccessToken.getCurrentAccessToken()
                  .then((data) => {
                    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                    firebase.auth().signInWithCredential(credential)
                      .then(() => {
                        resolve();
                      })
                      .catch((error) => {
                        reject();
                      });
                  });
              }
            },
            (error) => {
              reject();
            },
          );
        })
    }

    static loginWithGoogle() {
      return new Promise((resolve, reject) => {
        GoogleSignin.configure();
          GoogleSignin.signIn()
          .then((data) => {
              const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
              firebase.auth().signInWithCredential(credential)
                .then(() => {
                  resolve();
                })
                .catch((error) => {
                  console.log(error);
                  reject();
                });
            }
          )
          .catch((error) => {
            console.log(error);
            reject();
          });
      //   .catch((error) => {
      //     reject();
      //   })
      });
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
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject();
                });
        });

    }

    static updateDisplayName(name) {
        return new Promise((resolve, reject) => {
          var user = firebase.auth().currentUser;

          user.updateProfile({
            displayName: name,
          }).then(function() {
            resolve()
          }).catch(function(error) {
            reject(error);
          });
        })
    }
}
