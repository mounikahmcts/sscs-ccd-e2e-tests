const faker = require('faker/locale/en_GB');
var po = 'DA'+faker.random.number({'min': 1,'max': 4})+ ' 5TB';

module.exports = {
  formData : [
    // { question: 'contains_mrn', answer: 'true' },
    { question: 'mrn_date', answer: getTodaysDate() },
    { question: 'benefit_type_description', answer: 'PIP' },
    { question: 'person1_title', answer: 'Mr' },
    { question: 'person1_first_name', answer: 'Mark' },
    { question: 'person1_last_name', answer: 'Smith' },
    { question: 'person1_address_line1', answer: '999 Road Lane' },
    { question: 'person1_address_line2', answer: 'Town Name' },
    { question: 'person1_address_line3', answer: 'City Name' },
    { question: 'person1_address_line4', answer: 'County Name' },
    { question: 'person1_postcode', answer: 'SW1H 9AJ' },
    // { question: 'person1_phone', answer: '02099999999' },
    // { question: 'person1_mobile', answer: '07777777777' },
    // { question: 'person1_dob', answer: '01/01/1980' },
    { question: 'person1_nino', answer: ''},
    // { question: 'person2_title', answer: 'Mrs' },
    // { question: 'person2_first_name', answer: 'Sarah' },
    // { question: 'person2_last_name', answer: 'Smith' },
    // { question: 'person2_address_line1', answer: '111 New Road Lane' },
    // { question: 'person2_address_line2', answer: 'New Town Name' },
    // { question: 'person2_address_line3', answer: 'New City Name' },
    // { question: 'person2_address_line4', answer: 'New County Name' },
    // { question: 'person2_postcode', answer: 'NE9 1ZB' },
    // { question: 'person2_dob', answer: '12/12/1972' },
    // { question: 'person2_nino', answer: '' },
    // { question: 'representative_company', answer: 'ABC Advisory Services' },
    // { question: 'representative_address_line1', answer: '63 Grovehill Road' },
    // { question: 'representative_address_line2', answer: 'The Square' },
    // { question: 'representative_address_line3', answer: 'Redhill' },
    // { question: 'representative_address_line4', answer: 'Surrey' },
    // { question: 'representative_postcode', answer: 'RH1 6RE' },
    // { question: 'representative_phone', answer: '02092323231' },
    // { question: 'representative_title', answer: 'Miss' },
    // { question: 'representative_first_name', answer: 'Lashunda' },
    // { question: 'representative_last_name', answer: 'Howe' },
    // { question: 'appeal_grounds', answer: 'see scanned SSCS1 form' },
    // { question: 'appeal_late_reason', answer: 'details about the reason' },
    { question: 'is_hearing_type_oral', answer: 'true' },
    { question: 'is_hearing_type_paper', answer: 'false' },
    // { question: 'hearing_options_exclude_dates', answer: '01/01/2050' },
    // { question: 'hearing_support_arrangements', answer: 'Wheelchair access' },
    // { question: 'hearing_options_hearing_loop', answer: 'Yes' },
    // { question: 'hearing_options_accessible_hearing_rooms', answer: 'No' },
    // { question: 'hearing_options_sign_language_interpreter', answer: 'No' },
    // { question: 'hearing_options_language_type', answer: 'Spanish' },
    // { question: 'hearing_options_dialect', answer: 'Andalusian' },
    // { question: 'hearing_options_sign_language_type', answer: 'ASL' },
    // { question: 'agree_less_hearing_notice', answer: 'true' },
    // { question: 'signature_name', answer: 'Sarah Smith' },
    // { question: 'signature_appeal_date', answer: '01/04/2050' },
    { question: 'office', answer: '3' },
    // { question: 'office', answer: faker.random.number({'min': 1,'max': 5})},
    ]
};

function getTodaysDate() {
  var d = new Date();
  var month = d.getUTCMonth();
  var todaysDate =  d.getDate() + "/" + month + "/" + d.getUTCFullYear();
  return todaysDate;
}