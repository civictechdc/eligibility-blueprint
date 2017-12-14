import Polyglot from 'node-polyglot';

const polyglot = new Polyglot();


const en = {
  "TRUE": "Yes",
  "ABOUT": "About",
  "CONTACT": "Contact",
  "LOGIN": "Sign In",
  "LANGUAGE": "LANGUAGE",
  "FALSE": "No",
  "FRONT_YARD": "FrontYard",
  "FRONT_PORCH": "FrontPorch",
  "FRONT_DOOR": "FrontDoor",
  "OTHER": "Other",
  "START_OVER": "Start Over",
  "SUBMITTED_ANSWERS": "Submitted Answers",
  "NO_ANSWERS_SUBMITTED": "No answers had been submitted",
  "CALCULATING_ELIGIBILITY": "Please wait while we calculate the eligible programs",
  // QUESTIONS
  "IS_THERE_A_CRISIS": "Is there a crisis?",
  // Parenting
  "RISK_OF_REMOVAL": "Is there a risk of removal?",
  "IN_HOME_CASE": "Is it an in-home case?",
  // Substance use
  "SUBSTANCE_REASON_FOR_REMOVAL": "Is substance the reason for removal?",
  "CURRENT_USE_OR_RELAPSE": "Is the parent currently using or at risk of relapse?",
  "SUBSTANCE_ABUSE_IMPACT_PARENTING": "Does substance abuse impact parenting?",
  "SUBSTANCE_BARRIER_FOR_REUNIFICATION": "Is substance abuse a barrer for reunficiation?",
  // Housing
  "STABLE_INCOME": "Is there a stable source of income such as employment, SSI, TANF, or child support?",
  "HOMELESS_OR_UNSTABLE_HOUSING": "Is the client homeless or living in unstable housing?",
  // Step-down collaborative support
  // TODO(aimee): WARD is skipped in the decision tree (data.json) because not
  // sure what impact it has on referrals.
  "WARD": "What ward are they in?",
  "CASE_STATUS": "What is the case status?",
  // PROGRAMS
  "PESP": "PESP",
  "PROJECT_CONNECT": "Project Connect",
  "RAPID_HOUSING": "Rapid Housing",
  "TRANSITIONAL_HOUSING": "Transitional Housing",
  "COLLABORATIVE": "Collaborative",
  "MSS": "Mobile Stabilization Services",
  "LOADING": "Loading...",
  // Search for Case
  "OPEN_CASE_HEADER": "Open Case",
  "SEARCH_HELP_TEXT": "Search for your case by entering family name and Date of Birth.",
  "LAST_NAME_INPUT": "Last Name",
  "LAST_NAME_HELP": "Type any letter in the last name",
  "DATE_OF_BIRTH_INPUT": "Date of Birth",
  "DOB_HELP": "Enter in MM/DD/YYYY format",
  "SUBMIT_SEARCH_BUTTON": "Search",
  // Cases Search Results
  "CASES_SEARCH_RESULTS": "Matching Cases",
  "BACK_TO_SEARCH": "Back to Search",
  "SELECT_CASE": "Select Case",
  // Case View
  "SOCIAL_WORKER_ID": "Social Worker ID",
  "SUPERVISOR_ID": "Supervisor ID",
  "REFERRAL_ID": "Referral ID",
  "REFERRAL_DATE": "Referral Date",
  "BACK_TO_SEARCH_RESULTS": "Back to Search Results",
  "SEE_CASE_FLAGS": "See Case Flags",
  "BACK_TO_CASE": "Back to Case",
  "GO_TO_QUESTIONS": "Go to Questions",
  "QUALIFIED_PROGRAMS_FOR_CASE": "Qualified Programs For Case"


}

const es = {
  "LANGUAGE": "IDIOMA",
  "ABOUT": "acerca de",
  "CONTACT": "contacto",
  "true": "Si",
  "false": "No",
  "START_OVER": "Empieza",
  "LOGIN": "iniciar sesión"
}

polyglot.extend(en);
// or

export const setLanguage = (language, history) => {
  polyglot.extend(language === 'en' ? en : es);
  history.push(history.location.pathname);
}



export default polyglot;
