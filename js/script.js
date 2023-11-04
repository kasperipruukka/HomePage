window.addEventListener('load', function() {
  setAge('age');
});

function setAge(id) {
  const element = document.getElementById(id);
  if (!element) {
    logMessage('Age could not be set.');
    return;
  }

  const age = getAge('1997-09-26');
  element.textContent = age;
}

function getAge(birthDate) {
  const ageFallbackValue = 26;

  const birthYear = getBirthYear(birthDate);
  if (!birthYear) {
    return ageFallbackValue;
  }

  const age = new Date().getFullYear() - birthYear;
  if (!age || isNaN(age)) {
    return ageFallbackValue;
  }

  return age;
}

function getBirthYear(birthDate) {
  if (!birthDate) return;

  const birthYear = new Date(birthDate).getFullYear();
  return birthYear;
}

function logMessage(message) {
  console.log(message);
}

function isValidDate(date) {
  if (!date) return false;
  const jsDate = new Date(date);
  return !isNaN(jsDate.getTime());
}
