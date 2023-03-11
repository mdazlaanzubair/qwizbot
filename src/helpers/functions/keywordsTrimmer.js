export const keywordsTrimmer = (inputString) => {
  // Remove any leading or trailing white space
  inputString = inputString.trim();
  // Remove any surrounding quotes if they exist
  if (
    inputString.charAt(0) === "'" &&
    inputString.charAt(inputString.length - 1) === "'"
  ) {
    inputString = inputString.substring(1, inputString.length - 1);
  }
  // Split the string by comma and extract words
  var words = inputString.split(",").map(function (item) {
    // Remove any leading or trailing white space
    item = item.trim();
    // Remove any surrounding quotes if they exist
    if (item.charAt(0) === "'" && item.charAt(item.length - 1) === "'") {
      item = item.substring(1, item.length - 1);
    }
    return item;
  });
  // Return the resulting array
  return words;
};
