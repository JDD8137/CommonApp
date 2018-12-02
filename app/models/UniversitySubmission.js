export default class UniversitySubmission {
    constructor(obj) {
        if (obj == null) {
            this.applicationId = "";
            this.universityId = "";
            this.submittedDate = "";
            this.admissionsDecision = "";
            this.paymentReceived = false;
        } else {
            obj && Object.assign(this, obj);
        }
    }
}