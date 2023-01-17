const checkElementIsDisplayed = async (element, show = true) =>
  show ?
    await expect(element).toBeDisplayed() :
    await expect(element).not.toBeDisplayed();

module.exports = {
  checkElementIsDisplayed,
};
