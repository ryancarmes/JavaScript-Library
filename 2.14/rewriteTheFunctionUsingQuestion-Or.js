function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

// as an ? (Question mark operator) function/variant
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

// as an || (or) function/variant
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}