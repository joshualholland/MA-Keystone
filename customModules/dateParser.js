export default function dateParser(dateString) {
  dateString = dateString.split("-");
  let year = dateString[0];
  let month = dateString[1];
  let m = [];
  m[0] = "January";
  m[1] = "February";
  m[2] = "March";
  m[3] = "April";
  m[4] = "May";
  m[5] = "June";
  m[6] = "July";
  m[7] = "August";
  m[8] = "September";
  m[9] = "October";
  m[10] = "November";
  m[11] = "December";
  month = m[month];

  return "Since " + month + " " + dateString[0];
}
