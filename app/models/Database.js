import firebase from 'react-native-firebase';


import Applicant from "./Applicant";
import Application from "./Application";
import UniversitySubmission from "./UniversitySubmission"

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

    static getPhoto() {
        return firebase.auth().currentUser.photoURL;
    }
    

    static createApplication(applicant, application) {
        return new Promise((resolve, reject) => {
            var userId = Database.getUserId();
            const database = firebase.database();
            const applicantRef = database.ref("applicants/" + userId);
            applicantRef.set(applicant);
            application.submittedDate = (new Date()).toString();

            const applicationRef = database.ref("applications/");
            const key = applicationRef.push().key;
            applicationRef.child(key).set({
                ...application,
                applicantId: userId
            });
            resolve();
        });

    }

    static loadApplication() {
        return new Promise((resolve, reject) => {
            var userId = Database.getUserId();
            const database = firebase.database();
            const applicantRef = database.ref("applicants/" + userId);
            applicantRef.once("value").then((applicantSnapshot) => {
                if (applicantSnapshot.exists()) {
                    var applicant = new Applicant(applicantSnapshot.val());
                    applicant.id = applicantSnapshot.key;
                    const applicationRef= database.ref("applications");
                    applicationRef.orderByChild(applicant.id).once("value").then((applicationSnapshot) => {
                        var val = applicationSnapshot.val();
                        var application = new Application(val[Object.keys(val)[0]]);
                        application.id = Object.keys(val)[0];
                        resolve([applicant, application]);
                    });
                }
                else {
                    resolve([new Applicant(), new Application()]);
                }
            })
        })
    }

    static loadUniversitySubmissions() {
        return new Promise((resolve, reject) => {
            var userId = Database.getUserId();
            const database = firebase.database();
            const ref = database.ref("universitySubmissions");
            ref.orderByChild("applicationId").equalTo(userId).on("value", (snapshot) => {
                if (snapshot.exists()) {
                    var submissions = [];
                    snapshot.forEach(childSnapshot => {
                        let submission = new UniversitySubmission(childSnapshot.val());
                        submission.id = childSnapshot.key;
                        submissions.push(submission);
                    });
                    resolve(submissions);
                }
            });
        })
    }

    static applyTo(universityId) {
        let submission = new UniversitySubmission();
        submission.universityId = universityId;
        submission.applicationId = Database.getUserId();
        submission.paymentReceived = false;
        submission.submittedDate = (new Date()).toString();
        submission.admissionsDecision = "Payment Pending";
        const database = firebase.database();
        const ref = database.ref("universitySubmissions/");
        let id = ref.push().key;
        ref.child(id).set({
            ...submission
        });
    }

    static listenForStatusChange(callback) {
        const database = firebase.database();
        const ref = database.ref("applications");
        ref.orderByChild("applicantId").equalTo(Database.getUserId()).on("value", (snapshot) => {
            var val = snapshot.val();
            var application = new Application(val[Object.keys(val)[0]]);
            callback(application.admissionsDecision);
        })
    }
}
