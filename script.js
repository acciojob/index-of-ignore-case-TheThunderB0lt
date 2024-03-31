function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let x = s1.toLowerCase();
	let y = s2.toLowerCase();

	return x.indexOf(y);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
