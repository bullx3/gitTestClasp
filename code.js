function myFunction() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let value = sheet.getRange("A1").getValue();
  console.log("A1: " + value);
}

function getA2() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let value = sheet.getRange("A2").getValue();
  console.log(value);
  return value;
}

function getA3() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let value = sheet.getRange("A3").getValue();
  console.log(value);
  return value;
}
