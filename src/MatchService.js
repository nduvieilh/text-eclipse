export function createRegExMatch(matchObj, matchString) {
  console.log(matchObj, matchString);
}


import uuidv4 from 'uuid/v4';

class MatchService {
  static createRegExMatch(matchObj, matchString) {
    console.log(matchObj, matchString);
  }
  
  static createMatch() {
    return {
      id: uuidv4(),
      active: true,
      style: "",
      strings: [],
      regex: false,
      case_insensitive: false
    };
  }
}

export default MatchService;