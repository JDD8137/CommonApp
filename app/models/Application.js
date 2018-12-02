export default class Application {
    constructor(obj) {
        if (obj == null) {
            this.applicantId = "";
            this.universityId = "";
            this.submittedDate = "";
            this.examScore = "";
            this.examiningAuthority = "";
            this.firstDegreeChoice = "";
            this.firstDegreeExplanation = "";
            this.recommendation = "";
            this.recommenderName = "";
            this.secondDegreeChoice = "";
            this.secondDegreeExplanation = "";
        } else {
            obj && Object.assign(this, obj);
        }
    }
}