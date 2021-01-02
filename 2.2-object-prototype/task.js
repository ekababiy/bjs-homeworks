String.prototype.isPalindrome = function() {
  const str = this.toLowerCase();
	
  let arrayOriginal = str.split('');
  let arrayReverse = str.split('').reverse();
	
  function deleteSpace(array){
    for (let i = 0; i < array.length; i++){
      if (array[i] == " "){
        array.splice(i, 1);
      }
    }
    return array.join('');
  };

  let strOne = deleteSpace(arrayOriginal),
      strTwo = deleteSpace(arrayReverse);

  return strOne === strTwo;
};

function getAverageMark(marks) {
      let average = 0;
  const len = marks.length;
	
  if (len == 0) {
    return average;
  } else {
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += marks[i];
    }
    average = sum / len;

    const roundedAverage = Math.round(average);
    return roundedAverage;
  }
}

function checkBirthday(birthday) {
	let verdict;
	const currentYear = new Date().getFullYear();
	const now = new Date();
	const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
	const dateOfBirthday = new Date(birthday);
	const monthDayOfBirthday = new Date(currentYear, dateOfBirthday.getMonth(), dateOfBirthday.getDate());
	
	if ((currentYear - dateOfBirthday.getFullYear()) < 18) {
		verdict = false;
	} else if ((currentYear - dateOfBirthday.getFullYear()) === 18) {
		if (((+now) - (+firstDayOfCurrentYear)) < ((+monthDayOfBirthday) - (+firstDayOfCurrentYear))) {
			verdict = false;
		} else {
			verdict = true;
		}
	} else {
		verdict = true;
	}
	return verdict;
}

//console.log(checkBirthday(birthday));
