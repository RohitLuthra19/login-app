/* eslint-disable no-useless-escape */
const validate = (values, fields) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let errors = {...fields};
  if (!values.email) {
    errors.email = "Required field";
  } else if (!values.email || !regex.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;//  /(?=.*[0-9])/;
  if (!values.password) {
    errors.password = "Required field";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters long.";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Invalid password. Must contain at least one symbol, upper and lower case letters and a number.";
  }

  return errors;
};

export default validate