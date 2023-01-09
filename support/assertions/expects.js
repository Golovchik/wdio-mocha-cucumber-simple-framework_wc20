const checkElementIsDisplayed = async (element) => {
  await expect(element).toBeDisplayed();
};

module.exports = {
  checkElementIsDisplayed,
};
