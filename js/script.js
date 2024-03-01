window.addEventListener('load', function() {
  setAge('age');
});

function setAge(id) {
  const element = document.getElementById(id);
  if (!element) {
    logMessage('Age could not be set.');
    return;
  }

  const age = calculateAge('1997-09-26');
  element.textContent = age;
}

function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - birthDate.getMonth();

  if (monthsDiff < 0 || (monthsDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function logMessage(message) {
  console.log(message);
}

function isValidDate(date) {
  if (!date) return false;
  const jsDate = new Date(date);
  return !isNaN(jsDate.getTime());
}
