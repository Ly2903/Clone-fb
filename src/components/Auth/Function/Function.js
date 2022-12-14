const requiredError = (errors, fieldName) => {
  const array = fieldName.split(".");
  if (array.length > 1 && Object.keys(errors).length > 0) {
    return getResult(errors, array)?.type === "required";
  }
  return errors[fieldName]?.type === "required";
};
const patternError = (errors, fieldName) => {
  const array = fieldName.split(".");
  if (array.length > 1 && Object.keys(errors).length > 0) {
    return getResult(errors, array)?.type === "pattern";
  }
  return errors[fieldName]?.type === "pattern";
};
const getResult = (errors, array) => {
  let result = errors[array[0]];
  array.reduce((acc, val) => {
    if (result) result = result[val];
  });
  return result;
};
const getMessageError = (errors, fieldName) => {
  const array = fieldName.split(".");
  if (array.length > 1 && Object.keys(errors).length > 0) {
    return getResult(errors, array)?.message;
  }
  return errors[fieldName]?.message;
};
export { getMessageError, requiredError, patternError };
