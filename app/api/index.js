import _ from "lodash";
import universities from "./universities";
import './global.js';

export const contains = ({ name, acronym, location }, query) => {
  if (name.toUpperCase().includes(query.toUpperCase())
    || acronym.toUpperCase().includes(query.toUpperCase())
    || location.toUpperCase().includes(query.toUpperCase())) {
    return true;
  }

  return false;
};

export const getUniversities = (limit = 15, query = "") => {
  return new Promise((resolve, reject) => {
    if (query.length == 0) {
      resolve(_.take(universities, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(users, university => {
        return contains(university, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
}

export default getUniversities;