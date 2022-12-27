const BasePage = require("./base.page");

class DoctorPage extends BasePage {
  get drNembo() {
    return $("//*[text()='Dr. Nembo Lukeni']");
  }
  get drMollie() {
    return $("//*[text()='Dr. Mollie Cobb']");
  }
  get drYara() {
    return $("//*[text()='Dr. Yara Barros']");
  }
  get drPaul() {
    return $("//*[text()='Dr. Paul Walker']");
  }
  get drAmelia() {
    return $("//*[text()='Dr. Amelia Edwards']");
  }
  get drAlexa() {
    return $("//*[text()='Dr. Alexa Richardson']");
  }
  get drNout() {
    return $("//*[text()='Dr. Nout Golstein']");
  }
  get addNewDoctorButton() {
    return $("//*[@class='add-doctor-label']");
  }
  get selectSpecString() {
    return $("//span[@aria-owns='Specialization_options']");
  }
}

module.exports = DoctorPage;
