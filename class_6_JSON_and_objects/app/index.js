const date = new Date();

/* const day = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
];

console.log(day[date.getDay()]); */
/* const month = [
	"jan",
	"feb",
	"mar",
	"apr",
	"may",
	"jun",
	"jul",
	"aug",
	"sep",
	"oct",
	"nov",
	"dec",
];
console.log(month[date.getMonth()]);
console.log(
	date.getHours() +
		":" +
		date.getMinutes() +
		":" +
		date.getSeconds() +
		":" +
		date.getMilliseconds()
); */
/* console.log(date.toDateString()); */
console.log(date.getTimezoneOffset());

console.log(
	date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
);
console.log(
	date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds()
);

const somoy = "12 APRIL 1997";
console.log(Date.parse(somoy));
