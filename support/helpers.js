const getConvertTextToVariable = (text) => {
  let newText = text.split(' ').join('');
  newText = newText[0].toLowerCase() + newText.slice(1);
  return newText;
};

module.exports = {
  getConvertTextToVariable,
};
