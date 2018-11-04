export default class Application {
    constructor(obj) {
        if (obj == null) {
            this.id = "";
            this.applicantId = "";
            this.universityId = "";
            this.degreeChoicesInOrder = ["",""];
            this.submittedDate = "";
            this.admissionsDecision = "";
        } else {
            obj && Object.assign(this, obj);
        }
    }
}