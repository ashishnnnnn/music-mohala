export const validateInput = (email, password, confirm_password, name) => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (name !== undefined) {
    if (name.length === 0) {
      return "Enter Name Properly";
    }
  }
  if (!reg.test(email)) {
    return "INVALID Email";
  }
  if (password !== undefined) {
    if (password.length === 0) {
      return "Enter Password";
    }
    if (password.length < 7) {
      return "Password length should be greater than 7";
    }
  }
  if (confirm_password === undefined) {
    return "input confirm password";
  }
  if (password !== confirm_password) {
    return "PASSWORD AND CONFIRM PASSWORD DOES NOT MATCH";
  }
  return "OK";
};
