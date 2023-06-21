//=======LOCAL STORAGE ========//

/* const usersData = JSON.stringify(users);
localStorage.setItem("users", usersData); */
/* const usersData = JSON.parse(localStorage.getItem("users"));
console.table(usersData);
 */
/* localStorage.removeItem("users"); */

//===============================================

//=============SESSION STORAGE==========//

/* const usersData = JSON.stringify(users);
sessionStorage.setItem("users", usersData); */
/* const usersData = JSON.parse(sessionStorage.getItem("users"));
console.table(usersData);
sessionStorage.removeItem("users"); */

//================================================

//==========COOKIE STORAGE===================//
/* const usersData = JSON.stringify(users);

const expireTime = new Date();
expireTime.setTime(Date.now() + 10000);

document.cookie = `users=${usersData};expires=${expireTime.toUTCString()};path=/`;

console.log(document.cookie);
 */

//=======ERROR HANDLING =======//
/* const age = 0;

try {
	if (age >= 18) {
		console.log("Your age is ok");
	} else {
		throw new Error("Your age is not okay");
	}
} catch (e) {
	console.log(e.message);
}
 */

//==========REGULER EXPRESSION =============//

//BANGLADESHI MOBILE NUMBER

/* +8801913509868; */
/* const pattarn = /(01|\+8801|8801)[0-9]{9}/; */
/* riponmiah858@gmail.com */
/* let email = "mosarofmiah@gmail.com";
const pattarn = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}/; */


let email = "mosarofmiah@gmail.com";
const pattarn = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}/;
console.log(pattarn.test(email));
