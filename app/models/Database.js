import firebase from 'react-native-firebase';


export class Database {
    static getUserId() {
        return firebase.auth().currentUser.uid;
    }

    static getUserName() {
        return firebase.auth().currentUser.displayName;
    }

    static getEmail() {
      return firebase.auth().currentUser.email;
    }

    static createApplication(applicant, application) {
        var userId = Database.getUserId();
        const database = firebase.database();
        const applicantRef = database.ref("applicants/" + userId);
        applicantRef.set(applicant);

        const applicationRef = database.ref("applications/");
        const key = applicationRef.push().key;
        ref.child(key).set({
            ...application,
            applicantId: userId
        });
    }
}
