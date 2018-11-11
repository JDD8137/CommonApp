export default class Applicant {
    constructor(obj) {
        if (obj == null) {
            this.id = "";
            this.dateOfBirth = "";
            this.nationality = "";
            this.schoolName = "";
            this.schoolAddress = "";
            this.dateStartedHighSchool = "";
            this.dateGraduatedHighSchool = "";
            this.gpa = "";
        } else {
            obj && Object.assign(this, obj);
        }
    }
}