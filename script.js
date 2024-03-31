function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let x = str.toLowerCase(s1);
	let y = str.toLowerCase(s2);

	return x.indexOf(y);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
